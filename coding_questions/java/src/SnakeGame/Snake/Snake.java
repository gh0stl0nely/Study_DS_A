package SnakeGame.Snake;
import java.util.*;

import SnakeGame.SnakeSection.SnakeSection;
import SnakeGame.SnakeDirection.SnakeDirection;

public class Snake {
    private List<SnakeSection> sections;
    private boolean isAlive;
    private SnakeDirection direction;

    public Snake(int x, int y){
        SnakeSection head = new SnakeSection(x, y);
        this.isAlive = true;
        this.sections = new ArrayList<SnakeSection>();
        this.sections.add(head); // Head variable represents the "head" of the snake in the list of sections
    }
    
    public List<SnakeSection> getSections(){
        return sections;
    }
    
    public boolean isAlive(){
        return isAlive;
    }
    
    public SnakeDirection getDirection(){
        return direction;
    }
    
    public void setDirection(SnakeDirection direction){
        this.direction = direction;
    }

    /**
     * Getting the x-coordinate of the snake's head
     */
    public int getX(){
        return this.sections.get(0).getX();
    }

    /**
     * Getting the y-coordinate of the snake's head
     */
    public int getY(){
        return this.sections.get(0).getY();
    }
    
    public void move(){
        
    }

}
