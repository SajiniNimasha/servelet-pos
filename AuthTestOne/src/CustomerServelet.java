import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.json.stream.JsonParsingException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;


@WebServlet(urlPatterns = "/customers")
public class CustomerServelet extends HttpServlet {
    @Resource(name = "java:comp/env/jdbc/pool")
    private DataSource ds;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try (PrintWriter out = resp.getWriter()) {

            resp.setContentType("application/json");

            try {
                Connection connection = ds.getConnection();

                Statement stm = connection.createStatement();
                ResultSet rst = stm.executeQuery("SELECT * FROM Customer");

                JsonArrayBuilder customers = Json.createArrayBuilder();

                while (rst.next()){
                    String id = rst.getString("id");
                    String name = rst.getString("name");
                    String address = rst.getString("address");

                    JsonObject customer = Json.createObjectBuilder()
                            .add("id", id)
                            .add("name", name)
                            .add("address", address)
                            .build();
                    customers.add(customer);
                }

                out.println(customers.build().toString());

                connection.close();
            } catch (Exception ex) {
                resp.sendError(500, ex.getMessage());
                ex.printStackTrace();
            }

        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        try {

            JsonReader reader = Json.createReader(req.getReader());

            JsonObject item = reader.readObject();
            resp.setContentType("application/json");

            String id = item.getString("id");
            String name = item.getString("name");
            String address = item.getString("address");



//            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = ds.getConnection();
            PreparedStatement pstm = connection.prepareStatement("INSERT INTO Customer VALUES (?,?,?)");
            pstm.setObject(1,id);
            pstm.setObject(2,name);
            pstm.setObject(3,address);
            int affectedRows = pstm.executeUpdate();

            if (affectedRows > 0){
                resp.setStatus(HttpServletResponse.SC_CREATED);
            }else{
                resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }

        }catch (JsonParsingException | NullPointerException  ex){
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }catch (Exception ex){
            resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }

    }
}
