export default class Track {
    Name;
    Curva;
    Reta;
    Confronto;

    randomize(){
        let random = Math.floor(Math.random() * 3) + 1;
        switch(random){
            case 1:
                this.Curva = true;
                this.Reta = false;
                this.Confronto = false;
                this.Name = "Curva";
                break;
            case 2:
                this.Curva = false;
                this.Reta = true;
                this.Confronto = false;
                this.Name = "Reta";
                break;
            case 3:
                this.Curva = false;
                this.Reta = false;
                this.Confronto = true;
                this.Name = "Confronto";
                break;
        }
    }
}