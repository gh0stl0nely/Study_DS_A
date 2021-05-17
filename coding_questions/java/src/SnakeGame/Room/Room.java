package SnakeGame.Room;

import SnakeGame.Mouse.*;
import SnakeGame.Snake.*;
import SnakeGame.SnakeDirection.*;
import SnakeGame.KeyboardObserver.*;

import java.awt.event.KeyEvent;

public class Room {
    private int width;
    private int height;
    private Snake snake;
    private Mouse mouse;

    public static Room game;

    public Room(int width, int height, Snake snake) {
        this.width = width;
        this.height = height;
        this.snake = snake;
        game = this;
    }

    public Snake getSnake() {
        return snake;
    }

    public Mouse getMouse() {
        return mouse;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setSnake(Snake snake) {
        this.snake = snake;
    }

    public void setMouse(Mouse mouse) {
        this.mouse = mouse;
    }

    /**
     * The program's main loop.
     * This is where all the important actions happen
     */
    public void run() {
        // Create a KeyboardObserver object and start it.
        KeyboardObserver keyboardObserver = new KeyboardObserver();
        keyboardObserver.start();

        // As long as the snake is alive
        while (snake.isAlive()) {
            // Does the observer have any key events?
            if (keyboardObserver.hasKeyEvents()) {
                KeyEvent event = keyboardObserver.getEventFromTop();
                // If 'q', then exit the game.
                if (event.getKeyChar() == 'q') return;

                // If "left arrow", then move the figure to the left
                if (event.getKeyCode() == KeyEvent.VK_LEFT)
                    snake.setDirection(SnakeDirection.LEFT);
                    // If "right arrow", then move the figure to the right
                else if (event.getKeyCode() == KeyEvent.VK_RIGHT)
                    snake.setDirection(SnakeDirection.RIGHT);
                    // If "up arrow", then move the figure up
                else if (event.getKeyCode() == KeyEvent.VK_UP)
                    snake.setDirection(SnakeDirection.UP);
                    // If "down arrow", then move the figure down
                else if (event.getKeyCode() == KeyEvent.VK_DOWN)
                    snake.setDirection(SnakeDirection.DOWN);
            }

            snake.move();   // Move the snake
            print();        // Display the current game state
            sleep();        // Pause between moves
        }

        System.out.println("Game Over!");
    }

    public void print() {
        // Create an array where we will "draw" the current game state
        // Draw all the parts of the snake
        // Draw the mouse
        // Display it all on the screen
    }

    public void eatMouse() {
        createMouse();
    }

    public void createMouse() {
        int x = (int) (Math.random() * width);
        int y = (int) (Math.random() * height);

        mouse = new Mouse(x, y);
    }

    public static void main(String[] args) {
        game = new Room(20, 20, new Snake(10, 10));
        game.snake.setDirection(SnakeDirection.DOWN);
        game.createMouse();
        game.run();
    }

    public void sleep() {
        // Pause. The length of the pause depends on the length of the snake
        // Thread.sleep(this.snake.getSections().size());
        int level = this.snake.getSections().size();
        try {
            if(level == 1){
                Thread.sleep(500);
            } else if(level == 11){
                Thread.sleep(300);
            } else if(level > 15){
                Thread.sleep(200);  
            } 
        } catch(InterruptedException e){
            
        }
    }
}