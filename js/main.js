'use strict';

{
    function createColumn(coll){
        const sourceB = [];
        for(let i = 0; i < 15; i++){
            sourceB[i] = i + 1 +(15 * coll);
        }

        const column =[];
        for(let i = 0; i < 5; i++){
            let sourceBIndex = Math.floor(Math.random() * sourceB.length);
            column[i] = sourceB.splice(sourceBIndex,1)[0];
        }

        return column;
    }

    function createColumns(){
        const columns = [];
        for(let i = 0; i<5; i++){
            columns[i] = createColumn(i);
        }
        columns[2][2] = 'FREE'; //ど真ん中はFREEとする。

        return columns;
    }

    function createBingo(columns){
        const bingo = [];
        for(let row = 0; row < 5; row++){
            bingo[row] = [];
            for(let col = 0; col < 5; col++){
                bingo[row][col] = columns[col][row];
            }
        }
        return bingo;
    }
   
    function renderBingo(bingo){
        for(let row = 0; row < 5; row++){
            const tr = document.createElement('tr');
            for(let col = 0; col < 5; col++){
                const td = document.createElement('td');
                td.textContent = bingo[row][col];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }
    const columns = createColumns();
    const bingo = createBingo(columns);
    renderBingo(bingo);    
}