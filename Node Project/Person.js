export class Person {
    constructor(name, favoriteColor)
    {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    
    speak() {
        console.log(this.name, this.favoriteColor);
    }
}