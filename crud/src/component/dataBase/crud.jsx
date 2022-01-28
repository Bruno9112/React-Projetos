import { deleteDoc, doc, getDocs, collection, updateDoc, addDoc } from "@firebase/firestore"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./db"

export default props => {

    useEffect(() => {readClientes()}, [])

    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const [users, setUsers] = useState([])
    
    const fireRef = collection(db, "users")
    
    async function readClientes() {
        const data = await getDocs(fireRef)
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    async function salvarCliente(user) {
        console.log(user.nome)
        if (user.id) {
            console.log("update")
            const userDoc = doc(fireRef, user.id)
            const newField = { nome: user.nome, idade: user.idade, email: user.email }
            updateDoc(userDoc, newField)
            navigate("/lista")
        } else {
            console.log("add")
            addDoc(fireRef, { nome: user.nome, idade: user.idade, email: user.email })
            navigate("/lista")
        }
        readClientes()
    }

    async function deletarUser(id) {
        const userDoc = doc(fireRef, id)
        await deleteDoc(userDoc)
        readClientes()
    }

    function selecionarUser(user) {
        setUser(user)
        navigate("/cadastro")
    }

    function novoUser() {
        console.log("asas")
        setUser([])
        navigate("/cadastro")
    }

    return {
        salvarCliente,
        deletarUser,
        readClientes,
        user,
        users,
        selecionarUser,
        novoUser
    }
}
