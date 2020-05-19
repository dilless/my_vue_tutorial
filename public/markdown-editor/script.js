// eslint-disable-next-line no-undef
new Vue({
    el: '#notebook',
    data: {
        notes: JSON.parse(localStorage.getItem('notes')) || [],
        selectedId: localStorage.getItem('selected-id') || null,
    },
    computed: {
        notePreview() {
            // eslint-disable-next-line no-undef
            return this.selectedNote ? marked(this.selectedNote.content) : ''
        },
        addButtonTitle() {
            return this.notes.length + ' note(s) already'
        },
        selectedNote() {
            return this.notes.find(note => note.id === this.selectedId)
        }
    },
    methods: {
        addNote() {
            const time = Date.now()
            const note = {
                id: String(time),
                title: 'New note ' + (this.notes.length + 1),
                content: '**Hi!** This note book is using [markdown](https://example.com) for formatting!',
                created: time,
                favorite: false,
            }
            this.notes.push(note)
        },
        selectNote(note) {
            this.selectedId = note.id
        },
        saveNotes() {
            localStorage.setItem('notes', JSON.stringify(this.notes))
            console.log('Notes saved!', new Date())
        }
    },
    watch: {
        notes: {
            handler: 'saveNotes',
            deep: true,
        },
        selectedId(val) {
            localStorage.setItem('selected-id', val)
        },
    }
})
