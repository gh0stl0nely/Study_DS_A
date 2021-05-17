package SnakeGame.Room;

import SnakeGame.Mouse.Mouse;
import SnakeGame.Snake.Snake;

public class Room {
    private int width;
    private int height;
    private Snake snake;
    private Mouse mouse;
    
    public static void main(String[] args){
        
    }
    
    public Room(int width, int height, Snake snake){
        this.width = width;
        this.height = height;
        this.snake = snake;
    }
    
    public int getWidth(){
        return width;
    }
    
    public void setWidth(int width){
        this.width = width;
    }
    
    public int getHeight(){
        return height;
    }
    
    public void setHeight(int height){
        this.height = height;
    }
    
    public Snake getSnake(){
        return this.snake;
    }
    
    public void setSnake(Snake snake){
        this.snake = snake;
    }
    
    public Mouse getMouse(){
        return this.mouse;
    }
    
    public void setMouse(Mouse mouse){
        this.mouse = mouse;
    }
    
}
