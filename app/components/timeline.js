// timeline.js
let timelineCmpnt = {
    template: `
        <div>
            <h2>{{ dayToDisplay }}</h2>
            <select v-model="selected" @change="transmitSelected">
                <option v-bind:value="day.value" v-for="day in days">{{ day.text }}</option>
            </select>
        </div>
    `,
    data: function() {
        return {
            start: moment([2020, 2, 18]),
            today: moment(),
            dayToDisplay: moment().subtract(1, "days").format('LL'),
            selected: moment().subtract(1, "days").format('YYYY-MM-DD'),
            days: Array()
        }
    },
    mounted: function() {
        this.listDays();
    },
    methods: {
        listDays: function() {
            let diff = this.today.diff(this.start, "days");
            for (var i = diff - 1; i >= 0; i--) {
                this.days.push({
                    text: this.today.subtract(1, 'days').format('LL'),
                    value: this.today.format('YYYY-MM-DD')
                });
            }
        },
        transmitSelected: function() {
            this.dayToDisplay = moment(this.selected).format('LL');
            this.$emit('change-layer', this.selected)
        }
    }
}