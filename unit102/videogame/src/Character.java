public class Character {

    private String name;
    private int energy;
    private int lifes;
    private int attackPoints;
    // constructor
    public Character(String name, int energy, int attackPoints) {
        this.name = name;
        this.energy = energy;
        this.attackPoints = attackPoints;
        this.lifes = 3;
    }
    // getters
    public String getName() {
        return this.name;
    }
    public  int getLifePoints() {
        return this.energy;
    }
    public int getAttackPoints() {
        return this.attackPoints;
    }
    // methods
    public void display() {
        System.out.println(" -------------------------- ");
        System.out.println("Name: " + this.name);
        System.out.println("Energy: " + this.energy);
        System.out.println("Attack Points: " + this.attackPoints);
        System.out.println("Lifes: " + lifes);
    }
    public  void attack(Character opponent){
        System.out.println(this.name + " is attacking ... " + opponent.name);

        int newLP =  opponent.energy - this.attackPoints;

        opponent.energy = newLP;
        opponent.display();

        if (opponent.energy <= 0){
            opponent.lifes = opponent.lifes-1;
            opponent.energy = 100;
            opponent.display();
        }
        // lifes = 0 : game over
        if (lifes <= 0) {
            System.out.println("GAME OVER!!");
        }
    }
}
