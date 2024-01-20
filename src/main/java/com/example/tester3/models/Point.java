package com.example.tester3.models;


public class Point {
    float x;
    float y;
    int r;
    boolean isHit;

    public Point(float x, float y, int r) {
        this.x = x;
        this.y = y;
        this.r = r;
        isHit = setIsHit();
    }

    private boolean setIsHit() {
        return checkSquare() || checkCircle() || checkTriangle();
    }

    private boolean checkTriangle() {
        return 0 <= x && x <= (float) r / 2 && (float) -r  <= y && y <= 0 && Math.abs(y) / 2 + x <= (float) r / 2;
    }

    private boolean checkCircle() {
        return x * x + y * y <= r * r && -r / 2 <= x && x <= 0 && 0 >= y && y >= -r / 2;
    }

    private boolean checkSquare() {
        return -r <= x && x <= 0 && 0 <= y && y <= r / 2;
    }

    @Override
    public String toString() {
        return "Point{" + "x=" + x + ", y=" + y + ", r=" + r + ", isHit=" + isHit + '}';
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public int getR() {
        return r;
    }

    public boolean getHit() {
        return isHit;
    }
}
