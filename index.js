class Theatre {


    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.seats = new Array()
    }

    doBooking(number_of_seat) {

        var tickets = new Array()

        if (number_of_seat > ((this.col * this.row) - this.seats.length)) {
            console.log("Not enough seats")
            return  tickets
        }

        for(var i = 0; i < number_of_seat;i++){
            this.seats.push("Customer")
            var ticket = this.findTicketSeat(this.seats.length-1)

            tickets.push(ticket)
        }

        return tickets;
    }
    
    findTicketSeat(index) {

        var seatRow = this.row - Math.floor(index / this.col)
        var seatIndex = index % this.col

        var index = this.seatNumberByIndex(seatIndex, this.col)
        
        return "Seat "+ seatRow + " "+ index
    }
    
    centerOf(col) {
        var center = Math.ceil(col/2)

        if (col % 2 == 0) {
            center += 1
        }
        return center
    }

    seatNumberByIndex(index, col) {

        var centerIdx = this.centerOf(this.col)
        var seatNumber = centerIdx

        var idx = index - 1
        var pos = Math.floor(idx / 2) + 1

        if ( col % 2 == 0 ) {
            if ( idx % 2 == 0 ) {
                seatNumber -= pos
            }else{
                seatNumber += pos
            }
        }else{
            if ( idx % 2 == 0 ) {
                seatNumber += pos
            }else{
                seatNumber -= pos
            }
        }
        return seatNumber
    }
}

var col = 10
var row = 6
var theatre = new Theatre(col, row);
tickets = theatre.doBooking(1)

console.log(tickets)

tickets = theatre.doBooking(3)

console.log(tickets)


tickets = theatre.doBooking(10)

console.log(tickets)