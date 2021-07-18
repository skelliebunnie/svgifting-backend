USE svgifting;

SELECT g.preference, i.name as 'ItemName', v.name as 'VillagerName'
	FROM gifts g 
    INNER JOIN items i
		ON i.id=g.ItemId
	INNER JOIN villagers v
		ON v.id=g.VillagerId;