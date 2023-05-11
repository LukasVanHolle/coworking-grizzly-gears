class Boom{
    constructor(z1, z2, z3, z4, rot){
        this.z1 = z1;
        this.z2 = z2;
        this.z3 = z3;
        this.z4 = z4;
        this.rot = rot;
    }

    rotate(){
        if(canRotate){
            if(this.rot === 270){
                this.rot = 0;
            }else{ 
                this.rot += 90;
            }
        }
    }

    canRotate(grid) {
        const buren = this.getNeighbor(grid);
      
        const opposites = {
          z1: 'z3',
          z2: 'z4',
          z3: 'z1',
          z4: 'z2'
        };
        for (const buur of buren) {
          for (const zijde in opposites) {
            const tegenovergestelde = opposites[zijde];
            if (this[zijde] && buur[tegenovergestelde]) {
              return true;
            }
          }
        }
      
        return false;
    }

    getNeighbor(grid) {
        const buren = [];
        const rij = this.rij;
        const kolom = this.kolom;
    
        if (rij > 0) {
          // boom boven
          const boven = grid[rij - 1][kolom];
          if (boven instanceof Boom) {
            buren.push(boven);
          }
        }
    
        if (rij < grid.length - 1) {
          // boom onder
          const onder = grid[rij + 1][kolom];
          if (onder instanceof Boom) {
            buren.push(onder);
          }
        }

        if (kolom > 0) {
            // boom links
            const links = grid[rij][kolom - 1];
            if (links instanceof Boom) {
                buren.push(links);
            }
        }

        if (kolom < grid[0].length - 1) {
            // boom rechts
            const rechts = grid[rij][kolom + 1];
            if (rechts instanceof Boom) {
                buren.push(rechts);
            }
        }

        return buren;
    }
}