public class MultiThreading {
    public static int a = 0;
    public static void main(String[] args) {
       Thread t1 = new MyThread();
       Thread t2 = new MyThread();
       Thread t3 = new MyThread();
       System.out.println(Math.round((double) (547602 * 3) / 10));

       t1.start();
       t2.start();
       t3.start();
    }

    public static void add(){

        synchronized(MultiThreading.class){
            while(a != 5){
                a++;
                System.out.println(a);
            }
        }
    }

    public static class MyThread extends Thread {
       
       public void run(){
          add();
       }

    }
}
