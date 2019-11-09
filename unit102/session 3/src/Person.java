public class Person {
    //attributes
    private String name;
    public int age;
    public int points;
    //constructor
    public  Person(String name, int age){
        this.name=name;
        this.age=age;
        this.points=100;
    }
    // methods
    public void setName(String name){
        this.name=name;
    }
    public String getName(){
        return this.name;
    }
    public void sayHello(){ //parameter String friend
        System.out.println("Hello"); // + friend not working find fix
    }
    public void printP(){
        System.out.println(name);
        System.out.println(age);
        System.out.println(this.points);
    }
    public int getAge(){
        return this.age;
    }
}
