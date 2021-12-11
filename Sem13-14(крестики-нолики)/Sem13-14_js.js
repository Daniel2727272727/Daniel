let board = [[".", ".", "."],
         [".", ".", "."],
         [".", ".", "."]];
let stop = 0; 


while (stop == 0 || (board[0][0] == '.' && board[0][1] == '.' && board[0][2] == '.' && board[1][0] == '.' && board[1][1] == '.' && board[1][2] == '.' && board[2][0] == '.' && board[2][1] == '.' && board[2][2] == '.')){
        if (stop != 1 && (board[0][0] == '.' || board[0][1] == '.' || board[0][2] == '.' || board[1][0] == '.' || board[1][1] == '.' 
                          || board[1][2] == '.' || board[2][0] == '.' || board[2][1] == '.' || board[2][2] == '.')){
            alert("ход крестиков "); 
            document.write('<br/>')
            let line = Number(prompt("Введите номер линии: "));
            let column = Number(prompt("Введите номер столбца: "));
            while (line > 3 || line < 1 || column > 3 || column < 1){ 
                alert("Введите координаты заново, выбранная позиция не существует");
                document.write('<br/>')
                let line = Number(prompt("Введите номер линии: "));
                let column = Number(prompt("Введите номер столбца: "));
            }    
            while (board[line-1][column-1] != '.'){ 
                alert("Введите координаты заново, выбранная позиция занята");
                document.write('<br/>')
                let line = Number(prompt("Введите номер линии: "));
                let column = Number(prompt("Введите номер столбца: "));
            }    
            board[line-1][column-1] = 'x';
            document.getElementById("box1_1").innerHTML = board[0][0];
            document.getElementById("box1_2").innerHTML = board[0][1];
            document.getElementById("box1_3").innerHTML = board[0][2];
            document.getElementById("box2_1").innerHTML = board[1][0];
            document.getElementById("box2_2").innerHTML = board[1][1];
            document.getElementById("box2_3").innerHTML = board[1][2];
            document.getElementById("box3_1").innerHTML = board[2][0];
            document.getElementById("box3_2").innerHTML = board[2][1];
            document.getElementById("box3_3").innerHTML = board[2][2];
        

        }else{
            stop = 2; 
        }    
        if (board[0][0] == 'x' && board[0][1] == 'x' && board[0][2] == 'x'){ 
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[1][0] == 'x' && board[1][1] == 'x' && board[1][2] == 'x'){
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[2][0] == 'x' && board[2][1] == 'x' && board[2][2] == 'x'){
            alert("победили крестики!"); 
            stop = 1;
        }    
        else if (board[0][0] == 'x' && board[1][0] == 'x' && board[2][0] == 'x'){ 
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[0][1] == 'x' && board[1][1] == 'x' && board[2][1] == 'x'){
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[0][2] == 'x' && board[1][2] == 'x' && board[2][2] == 'x'){
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[0][0] == 'x' && board[1][1] == 'x' && board[2][2] == 'x'){ 
            alert("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][2] == 'x' && board[1][1] == 'x' && board[2][0] == 'x'){
            alert("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }
        
        if (stop != 1 && (board[0][0] == '.' || board[0][1] == '.' || board[0][2] == '.' || board[1][0] == '.' || board[1][1] == '.' 
                          || board[1][2] == '.' || board[2][0] == '.' || board[2][1] == '.' || board[2][2] == '.')){ 
            alert("ход ноликов ");
            document.write('<br/>')
            line = Number(prompt("Введите номер линии: "));
            column = Number(prompt("Введите номер столбца: "));
            while (line > 3 || line < 1 || column > 3 || column < 1){ 
                alert("Введите координаты заново, выбранная позиция не существует");
                document.write('<br/>')
                line = Number(prompt("Введите номер линии: "));
                column = Number(prompt("Введите номер столбца: "));
            }    
            while (board[line-1][column-1] != '.'){ 
                alert("Введите координаты заново, выбранная позиция занята");
                document.write('<br/>')
                line = Number(prompt("Введите номер линии: "));
                column = Number(prompt("Введите номер столбца: "));
            }    
            board[line-1][column-1] = 'o';
            document.getElementById("box1_1").innerHTML = board[0][0];
            document.getElementById("box1_2").innerHTML = board[0][1];
            document.getElementById("box1_3").innerHTML = board[0][2];
            document.getElementById("box2_1").innerHTML = board[1][0];
            document.getElementById("box2_2").innerHTML = board[1][1];
            document.getElementById("box2_3").innerHTML = board[1][2];
            document.getElementById("box3_1").innerHTML = board[2][0];
            document.getElementById("box3_2").innerHTML = board[2][1];
            document.getElementById("box3_3").innerHTML = board[2][2];
                
        }else{
            if (stop != 1){ 
                stop = 2; 
            }    
        }        
        if (board[0][0] == 'o' && board[0][1] == 'o' && board[0][2] == 'o'){ 
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[1][0] == 'o' && board[1][1] == 'o' && board[1][2] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[2][0] == 'o' && board[2][1] == 'o' && board[2][2] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][0] == 'o' && board[1][0] == 'o' && board[2][0] == 'o'){ 
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][1] == 'o' && board[1][1] == 'o' && board[2][1] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][2] == 'o' && board[1][2] == 'o' && board[2][2] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][0] == 'o' && board[1][1] == 'o' && board[2][2] == 'o'){ 
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][2] == 'o' && board[1][1] == 'o' && board[2][0] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    

}
if (stop == 2){
    alert("Ничья");
}    