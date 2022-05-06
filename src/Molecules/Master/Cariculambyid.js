import React from 'react'
import Curriculumid1 from './Curriculumid/Curriculumid1';
import Curriculumid166 from './Curriculumid/Curriculumid166';
import Curriculumid167 from './Curriculumid/Curriculumid167';
import Curriculumid111 from './Curriculumid/Curriculumid111';
import Curriculumid114 from './Curriculumid/Curriculumid114';
import Curriculumid118 from './Curriculumid/Curriculumid118';
import Curriculumid168 from './Curriculumid/Curriculumid168';
import Curriculumid169 from './Curriculumid/Curriculumid169';
import Curriculumid170 from './Curriculumid/Curriculumid170';
import Curriculumid171223 from './Curriculumid/Curriculumid171223';
import Curriculumid182 from './Curriculumid/Curriculumid182';
import Curriculumid267 from './Curriculumid/Curriculumid267';

export default function Cariculambyid(props) {
    const final = props.data;

    return (
        <>
            <div className="curriculum-assimilate certification-courseslight full-w scroll-spbx" id="carriculum">
                <div className="container pt-16 pb-4">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Program <span className="orange-clrsite">Curriculum</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg fw-medium">
                            See which topics you will have to assimilate.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>


                    {final ?
                        <div className="curriculum-masterid full-w">

                            {final[0].curriculum_id == '259' ?
                                <div> {final[0].curriculum_id + ', ' + final[0].filename}</div>
                                : ''}

                            {final[0].curriculum_id == '166' ?
                                <Curriculumid166 />
                                : ''}

                            {final[0].curriculum_id == '167' ?
                                <Curriculumid167 />
                                : ''}

                            {final[0].curriculum_id == '114' ?
                                <Curriculumid114 />
                                : ''}

                            {final[0].curriculum_id == '118' ?
                                <Curriculumid118 />
                                : ''}

                            {final[0].curriculum_id == '168' ?
                                <Curriculumid168 />
                                : ''}

                            {final[0].curriculum_id == '169' ?
                                <Curriculumid169 />
                                : ''}

                            {final[0].curriculum_id == '170' ?
                                <Curriculumid170 />
                                : ''}

                            {final[0].curriculum_id == '171' || final[0].curriculum_id == '223' ?
                                <Curriculumid171223 />
                                : ''}

                            {final[0].curriculum_id == '267' ?
                                <Curriculumid267 />
                                : ''}

                            {final[0].curriculum_id == '1' ?
                                <Curriculumid1 />
                                : ''}

                            {final[0].curriculum_id == '182' ?
                                <Curriculumid182 />
                                : ''}

                            {final[0].curriculum_id == '111' ?
                                <Curriculumid111 />
                                : ''}

                        </div>
                        : ''}

                </div>
            </div>

        </>
    )
}
