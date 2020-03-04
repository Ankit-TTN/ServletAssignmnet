package com.ttn.assignment;

import com.google.gson.Gson;
import com.ttn.assignmentPojo.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet(
        name = "Register Servlet",
        urlPatterns = {"/register"}
)
public class RegisterServlet extends HttpServlet {

    @Override
    public void init() throws ServletException {
        System.out.println("Init Method");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        String username = req.getParameter("username");
        String email = req.getParameter("email");
        String password = req.getParameter("pass");
        PrintWriter out = resp.getWriter();

        User user = new User(username,email,password);

        Map<String,String> map = new HashMap<>();
        map.put("username",username);
        map.put("email",email);
        map.put("password",password);

        Gson gson = new Gson();

        String output = gson.toJson(map);
        out.write(output);
        out.flush();
    }

}
