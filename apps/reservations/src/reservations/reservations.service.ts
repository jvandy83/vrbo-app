import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRespository: ReservationsRepository,
  ) {}
  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRespository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: '123',
    });
  }

  findAll() {
    return this.reservationsRespository.find({});
  }

  findOne(_id: string) {
    return this.reservationsRespository.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRespository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    this.reservationsRespository.findOneAndDelete({ _id });
  }
}
