SELECT row_to_json (fc) 
FROM (
	SELECT 'FeatureCollection' AS type, array_to_json(array_agg(f)) AS features
	FROM (
		SELECT 'Feature' AS type, SCS.iso_cc AS id, row_to_json(
			(SELECT attr FROM (SELECT SCS.country,SCS.sum_contractors,SCS.types_of_services,SCS.types_of_clients,SCS.deaths,SCS.injuries,
						SCS.tos_ao,SCS.tos_uo,SCS.tos_umat,SCS.tos_log,SCS.tos_as,SCS.tos_us,SCS.tos_pat,SCS.tos_cp,SCS.tos_itg,SCS.tos_other,SCS.tos_nodata,
						SCS.toc_government,SCS.toc_private,SCS.toc_other,SCS.toc_nodata
			) AS attr)
		) AS properties, 
		'' AS geometry 
		FROM seasia_country_summary AS SCS WHERE iso_cc = 'world'
		) AS f
) AS fc;