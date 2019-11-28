public class Main {
    public static void main(String[] args) {
        Person student1 = new Person("Josh", 30);
        Person student2 = new Person("Sand", 22);
        Person student3 = new Person("mike", 23);
        Person student4 = new Person("guy", 400);

        Animal animal1 = new Animal("mala", "cat");
        Animal animal2 = new Animal("ra", "bird");
        Animal animal3 = new Animal("ta", "tiger");
        Animal animal4 = new Animal("unknown", "fish");

        animal1.attacks(student1.getName());
        animal2.attacks(student2.getName());
        animal3.attacks(student3.getName());
        animal4.attacks(student4.getName());

//        student1.setName("Josh");
//        student1.age = 30;
//        student2.setName("sand");
//        student2.age = 22;

        student1.printP();
        student2.printP();
        student3.printP();
        student4.printP();

//        student1.sayHello(student2.getName());

        int sum;
        sum = student1.getAge() + student2.getAge();
        System.out.println(sum);


        student1.sayHello();
        student2.sayHello();
    }

}