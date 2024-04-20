import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {ButtonSwiper} from '../sections/ButtonSwiper';
import {CustomText} from './CustomText';

interface Collaborator {
    name: string;
    description: string;
    personalPortfolioURI?: string;
    profilePictureURI: string;
}

interface Props {
    collaborators: Collaborator[];
}

export const CollaboratorsSlider = ({collaborators}: Props) => {
    return (
        <Swiper
            className="bg-blue-300 h-full"
            centeredSlides={true}
            slidesPerView={1}
            grabCursor={true}
            initialSlide={1}
            breakpoints={{
                560: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
            }}
        >
            {collaborators.map((collaborator) => (
                <SwiperSlide className="bg-yellow-100 mb-2">
                    <div className="bg-orange-500 h-full flex flex-col items-center gap-y-1">
                        <img src={collaborator.profilePictureURI} />
                        <CustomText
                            variant="subtitle"
                            className="text-xl text-center font-bold"
                        >
                            {collaborator.personalPortfolioURI ? (
                                <a href={collaborator.personalPortfolioURI}>
                                    {collaborator.name}
                                </a>
                            ) : (
                                collaborator.name
                            )}
                        </CustomText>
                        <CustomText className="text-center">
                            {collaborator.description}
                        </CustomText>
                    </div>
                </SwiperSlide>
            ))}
            <div className="flex justify-center">
                <ButtonSwiper />
            </div>
        </Swiper>
    );
};
