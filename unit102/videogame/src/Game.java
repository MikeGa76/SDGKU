public class Game {
    public static void main(String[] args) {
        Character toad = new Character("Toad", 100, 300);
        Character mario = new Character("Mario",100, 20);
//        System.out.println(toad.getName() + " " + toad.getAttackPoints() + " \n" + toad.getLifePoints());
//        System.out.println(mario.getName() + " " + mario.getAttackPoints() + " \n" + mario.getLifePoints());
//        toad.display();
//        mario.display();

        toad.attack(mario);
        toad.attack(mario);
        toad.attack(mario);
        mario.attack(toad);
    }

}

