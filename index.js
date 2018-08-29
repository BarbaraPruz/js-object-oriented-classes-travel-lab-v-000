const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate.getFullYear()+1);
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const convertAvenue = function (avenue) {
        return eastWest.findIndex( ave => ave===avenue);
    }
    const distanceVertical = Math.abs (this.beginningLocation.vertical - this.endingLocation.vertical);
    const distanceHorizontal = Math.abs (convertAvenue(this.beginningLocation.horizontal) -
          convertAvenue(this.endingLocation.horizontal));
    return distanceVertical + distanceHorizontal;
  }

  estimatedTime( peakTime=false) {
    const blocksPerMinute = peakTime ? 2 : 3;
    return this.blocksTravelled() / blocksPerMinute;
  }
}
