import { defineStore } from 'pinia'
import { ref } from 'vue'

export const arM = defineStore('arM', () => {
    const visto = ref(false)
    const Nmesa = ref(null)
    const Rodizio = ref(null)

    function getVisto() {
        return visto
    }
    function setVisto(keep) {
        visto.value = keep
        save()
    }
    function getNmesa() {
        return Nmesa
    }
    function setNmesa(keep) {
        Nmesa.value = keep
        save()
    }
    function getRodizio() {
        return Rodizio
    }
    function setRodizio(keep) {
        Rodizio.value = keep
        save()
    }

    function save() {
        localStorage.setItem('visto', JSON.stringify(visto.value))
        localStorage.setItem('Nmesa', JSON.stringify(Nmesa.value))
        localStorage.setItem('Rodizio', JSON.stringify(Rodizio.value))
    }

    function inicio() {
        visto.value = JSON.parse(localStorage.getItem('visto'))
        Nmesa.value = JSON.parse(localStorage.getItem('Nmesa'))
        Rodizio.value = JSON.parse(localStorage.getItem('Rodizio'))
    }

    inicio()

    return {
        getVisto,
        setVisto,
        getNmesa,
        setNmesa,
        getRodizio,
        setRodizio
    }
})
