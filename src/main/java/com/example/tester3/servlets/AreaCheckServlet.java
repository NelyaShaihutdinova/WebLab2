package com.example.tester3.servlets;

import com.example.tester3.models.Point;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.*;

@WebServlet("/areaChecker")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            HttpSession session = request.getSession(true);
            var bean = (List<Point>) session.getAttribute("array");
            System.out.println(request.getParameter("X"));
            var x = Float.parseFloat(request.getParameter("X"));
            var y = Float.parseFloat(request.getParameter("Y"));
            var r = Integer.parseInt(request.getParameter("R"));
            var point = new Point(x, y, r);
            System.out.println(session.getAttribute("array"));
            if (bean == null) {
                bean = new ArrayList<Point>();
                session.setAttribute("array", bean);
            }
            bean.add(0, point);
            System.out.println(session.getAttribute("array"));
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);


        } catch (Exception ignored) {
            HttpSession session = request.getSession(true);
            var bean = (List<Point>) session.getAttribute("array");
            System.out.println(session.getAttribute("array"));
            Point lastElement = bean.get(bean.size() - 1);
            bean.add(0, lastElement);
            System.out.println(session.getAttribute("array"));
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        }
    }
}