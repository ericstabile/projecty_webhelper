import React from 'react';
import IDField from './CardComponents/IDField';
import NameField from './CardComponents/NameField';
import IconPathField from './CardComponents/IconPathField';
import IconImgField from './CardComponents/IconImgField';
import IsStackableField from './CardComponents/IsStackableField';
import MaxStackField from './CardComponents/MaxStackField';

const CardComponentMapper = ({cardId, cardName, cardIconPath, cardIconImg, isCardStackable, maxCardStack }) => {
	return (
		<div>
			<IDField cardId={cardId}/>
      <NameField cardName={cardName}/>
      <IconPathField cardIconPath={cardIconPath} />
      <IconImgField cardIconImg={cardIconImg}/>
      <IsStackableField isCardStackable={isCardStackable}/>
      <MaxStackField maxCardStack={maxCardStack}/>
		</div>
	);
};

export default CardComponentMapper;