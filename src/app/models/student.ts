export class Student {

    constructor(
    public cin?:string,
    public nom? :string,
    public prenom? :string,
    public dateNaissance?:Date,
    public cv?:string,
    public photo?:[],
    public email?:string,
    public password?:string,
    public dateInscription?:Date,
    public sujet?:string,
    public diplome?:string
    ){}
}
