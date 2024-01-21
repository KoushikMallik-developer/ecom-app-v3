import {DateTimeFormat} from 'intl';

class DateModifier {


    formatDate(date) {
        // Parse the date string into a JavaScript Date object
        const parsedDate = new Date(date);

        // Use the DateTimeFormat class to format the date
        const formattedDate = new DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format(parsedDate);

        // Convert the first letter of the month to uppercase
        const formattedDateWithCapitalizedMonth = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

        return formattedDateWithCapitalizedMonth;
    }

    dateModififer (date:string){
        const parseDate  = new Date(date);
        return parseDate;
    }
}

export default DateModifier;
