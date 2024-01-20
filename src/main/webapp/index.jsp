<%@ page import="java.util.List" %>
<%@ page import="com.example.tester3.models.Point" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>WebLab2</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
</head>
<body>
<div class="container">
    <div class="header">
        <a>Шайхутдинова Нэля Вилевна P3208</a>
        <a>Вариант: 48775</a>
    </div>
    <div class="general">
        <canvas id="graph" width="400" height="400"></canvas>
        <div class="elementX">
            <label>
                X coordinates:<span id="x"></span>
                <select id="select">
                    <option value="-5">-5</option>
                    <option value="-4">-4</option>
                    <option value="-3">-3</option>
                    <option value="-2">-2</option>
                    <option value="-1">-1</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
        </div>
        <div class="elementY"><label for="inputText">Y coordinates:</label><input type="text" id="inputText"
                                                                                  placeholder="(-3, 3)"/></div>
        <div class="elementR">
            R value:
            <input type="radio" id="radio1" value="1" name="radiobutton" checked="checked"><label for="radio1">1</label>
            <input type="radio" id="radio2" value="2" name="radiobutton" checked="checked"><label
                for="radio2">2</label>
            <input type="radio" id="radio3" value="3" name="radiobutton" checked="checked"><label for="radio3">3</label>
            <input type="radio" id="radio4" value="4" name="radiobutton" checked="checked"><label
                for="radio4">4</label>
            <input type="radio" id="radio5" value="5" name="radiobutton" checked="checked"><label for="radio5">5</label>
        </div>
        <button type="button" class="checkButton" id="checkButton">Check</button>
    </div>
    <div class="results">
        <table class="table">
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Result</th>
            </tr>
            </thead>
            <tbody id="result">
            <% List<Point> list = (List<Point>) request.getSession().getAttribute("array");
                if (list != null) {
            %>
            <% for (Point point : list) { %>
            <tr>
                <td>
                    <%= point.getX() %>
                </td>
                <td>
                    <%= point.getY() %>
                </td>
                <td>
                    <%= point.getR() %>
                </td>
                <td>
                    <%= point.getHit() %>
                </td>
            </tr>
            <% } %>
            <%}%>
            </tbody>
        </table>
    </div>
</div>
<script src="js/graphElement.js"></script>
<script src="js/sendButton.js"></script>
</body>
</html>