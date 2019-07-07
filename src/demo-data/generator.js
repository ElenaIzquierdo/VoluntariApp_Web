import randomSeed from './random';

const setmana = ['03/06/2019','27/05/2019','20/05/2019','13/05/2019','06/05/2019','29/04/2019','22/05/2019','15/05/2019 '];
const valoracions = ['3','4','2','1','3','4','5','4'];
const assistencia_voluntaris = ['Alta','Alta','Mitjana','Alta','Baixa','Alta','Mitjana','Baixa'];
const assistencia_infants = ['Alta','Alta','Mitjana','Alta','Baixa','Alta','Mitjana','Baixa'];

export const defaultColumnValues = {
    setmana: setmana,
    valoracions: valoracions,
    assistencia_voluntaris: assistencia_voluntaris,
    assistencia_infants: assistencia_infants,
};
export function generateRows({
                                 columnValues = defaultColumnValues,
                                 length,
                                 random = randomSeed(329972281),
                             }) {
    const data = [];
    const columns = Object.keys(columnValues);

    for (let i = 0; i < length; i += 1) {
        const record = {};

        columns.forEach((column) => {
            let values = columnValues[column];

            if (typeof values === 'function') {
                record[column] = values({ random, index: i, record });
                return;
            }

            while (values.length === 2 && typeof values[1] === 'object') {
                values = values[1][record[values[0]]];
            }

            const value = values[Math.floor(random() * values.length)];
            if (typeof value === 'object') {
                record[column] = Object.assign({}, value);
            } else {
                record[column] = value;
            }
        });

        data.push(record);
    }

    return data;
}
