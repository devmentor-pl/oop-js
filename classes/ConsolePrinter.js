import PrinterInterface from './PrinterInterface.js';
import Field from './Field.js';

export default class ConsolePrinter extends PrinterInterface {
    run(data) {
        data.forEach(row => {
            let line = '';
            row.forEach(field => {
                line += ` ${!(field instanceof Field) || field.isEmpty() ? '_' : field.piece.name[0]} `;
            });

            console.log(line);
        });
    }
}