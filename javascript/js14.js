const user ={
    email:'admin123@gmail.com',
    updatedEmail:(email)=>{
        this.email = email
    }
}
user.updatedEmail('amith11@gmail.com')

console.log(user.email)


console.log(this.email)