import { acceptHMRUpdate, defineStore } from "pinia";

export const useGlobalStore = defineStore('Global', () =>{
    // define state
    const title = ref("");
    //getter
    const greetTitle = computed(()=>{
        if (!title.value) return "hello"
        return `hello, ${title.value}`
    })

    //action
    const sayHello = (name:string = "Stranger") =>{
        alert(`Hello, ${name}`);
    }
    return {
        title,
        greetTitle,
        sayHello
    }
})

if (import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore,import.meta.hot))
}