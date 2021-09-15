```vue
<template>
    <div class="kiosk-calendar-wrapper">
        <div class="kiosk-calendar-header">
            <p class="kiosk-calendar-header-text">
                Please select your departure date
            </p>
        </div>
        <v-row justify="center">
            <v-date-picker
                v-model="picker"
                @change="onPick"
                :allowed-dates="disablePastDates"
                :no-title="calendarTitle"
            >
            </v-date-picker>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'KioskCalendar',
    data() {
        return {
            picker: null,
            calendarTitle: false,
        };
    },
    methods: {
        // NOTE: This disables past dates, can be removed if needed
        disablePastDates(val) {
            return val >= new Date().toISOString().substr(0, 10);
        },
        onPick(event) {
            this.$emit('onDatePick', event);
        },
    },
};
</script>

<style>
/* overriding the default vuetify calendar: */
/* NOTE: check local scope options in case we use calendar somewhere else */
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
    position: absolute;
    bottom: -75px;
    left: 0;
    right: 0;
    z-index: 4;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.kiosk-calendar-wrapper {
    position: relative;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 90px;
}

.kiosk-calendar-header {
    background-color: #1976d2;
    width: 290px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.kiosk-calendar-header-text {
    color: white;
    font-weight: 700;
    text-align: center;
}
</style>
```
