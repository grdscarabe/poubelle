/*****************************************************************************
 * This JS package defines all the classes for the domain Poubelle.
 *****************************************************************************/

import moment from 'moment';

/**
 * Housing is the parent container of all other objects in the poubelle domain.
 * It will eventually store the GarbageBin or GarbageBag templates that are 
 * in use in the house.
 * 
 * @property {GarbageCollection[]} garbageCollections list of all the garbage
 * 			collections for this housing
 */
class Housing {

	/**
	 * Nothing special for now.
	 */
	constructor() {
		super();
		this.garbageCollections = [];
	}

}

/**
 * GarbageCollection represents a collect by the garbage truck. We assume that
 * only one bin may be collected at once.
 * 
 * @property {moment} collectionDate date when the garbage can is collected 
 * 			by the garbage truck
 * @property {GarbageCan} bin the bin that is collected
 */
class GarbageCollection {

	/**
	 * Simply build an object with the can to be collected and the date of 
	 * collect. If no date is specified, the current date is used.
	 * 
	 * @param {GarbageBin} bin the garbage can to be collected
	 * @param {moment} date date of the garbage collection
	 */
	constructor(bin, date=null) {
		super();
		if (! moment.isMoment(date)) {
			console.log("Must use moment for dates.")
		}
		// If not date specified, use the current one
		date==null ? this.collectionDate = moment() : this.collectionDate = date;
		// the garbage bin that is collected
		this.bin = bin;
	}
}

/**
 * GarbageBin represents a full garbage can that will collected by the 
 * garbage truck.
 * 
 * @property {bool} recyclableOnly flag to indicate if the garbage only contain
 * 			recyclables or not.
 * @property {number} volume volume of the bin liters
 * @property {number} filling filling of the bin in percentage of the volume
 * @property {number} weight weight of the bin contents
 * @property {GarbageBag[]} bags list of the garbage bags in the bin
 */
class GarbageBin {

	/**
	 * Nothing special for now.
	 */
	constructor() {
		super();
		this.recylableOnly = true;
		this.volume = 100; // 100L by default
		this.weight = null; // not weighted by default
	}

}

/**
 * A garbage bag is the most fundamental garbage container.
 * 
 * @property {moment} takeoutDate date when the bag is taken out
 * @property {bool} recyclable indicates if the content is recyclable or not, if
 * 		the content of a bag is a mix between recyclables and not recyclables then
 * 		we consider that it is not recycable
 * @property {number} volume volume of the garbage bag in liters
 * @property {number} weight weight of the bag contents
 * @property {moment} weight weight of the bag contents
 */
class GarbageBag {

	/**
	 * Build a new garbage bag.
	 * 
	 * @param {bool} recyclable indicates if the bag contains recyclables or not
	 * @param {moment} date date when the bag is taken out, if not specified then
	 * 		we use the current date 
	 */
	constructor(recyclable, date=null) {
		super();
		this.recyclable = recyclable; // is the content of the bag is recyclable?
		// If not date specified, use the current one
		if (! moment.isMoment(date)) {
			console.log("Must use moment for dates.")
		}
		date==null ? this.takeoutDate = moment() : this.takeoutDate = date;
		this.volume = null; // no measurement by default
		this.weight = null; // not weighted by default
	}

}