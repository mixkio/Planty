from django.db import models
from django.conf import settings


# 식물
class Plant(models.Model):
    plant_no = models.CharField(
        db_column='cntntsNo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='식물 번호'
    )  
    plant_name = models.CharField(
        db_column='cntntsSj', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='식물 이름'
    )  
    advise_info = models.CharField(
        db_column='adviseInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='조언 정보'
    )  
    classification = models.CharField(
        db_column='clCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='식물 분류'
    )  
    pest_info = models.CharField(
        db_column='dlthtsCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='병해충'
    )  
    pest_manage = models.CharField(
        db_column='dlthtsManageInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='병충해 관리법'
    )  
    ecology_code = models.CharField(
        db_column='eclgyCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='생태 코드'
    )  
    etc_info = models.CharField(
        db_column='etcEraInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='기타 시기'
    )  
    flower_color = models.CharField(
        db_column='flclrCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='꽃 색상'
    )  
    family_code = models.CharField(
        db_column='fmlCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='과 코드명'
    )  
    fruit_season = models.CharField(
        db_column='fmldeSeasonCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='과일 열리는 계절'
    )  
    fruit_color = models.CharField(
        db_column='fmldecolrCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='과일 색'
    )  
    fruit_info = models.CharField(
        db_column='fncltyInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='과일 '
    )  
    fertilizer_info = models.CharField(
        db_column='frtlzrInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='비료 요구 여부'
    )  
    growth_width = models.CharField(
        db_column='growthAraInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='성장 넓이 정보'
    )  
    growth_height = models.CharField(
        db_column='growthHgInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='성장 높이 정보'
    )  
    growth_temp = models.CharField(
        db_column='grwhTpCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='생육 온도'
    )  
    growth_style = models.CharField(
        db_column='grwhstleCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='생육 형태'
    )  
    growth_speed = models.CharField(
        db_column='grwtveCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='생장 속도'
    )  
    humidity = models.CharField(
        db_column='hdCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='적정 습도'
    )  
    blooming_season = models.CharField(
        db_column='ignSeasonCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='꽃 피는 계절'
    )  
    leaf_style = models.CharField(
        db_column='lefStleInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='잎 모양새'
    )  
    leaf_color = models.CharField(
        db_column='lefcolrCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='잎 색상'
    )  
    leaf_mark = models.CharField(
        db_column='lefmrkCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='잎 무늬'
    )  
    light_demand = models.CharField(
        db_column='lighttdemanddoCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='광도'
    )  
    manage_demand = models.CharField(
        db_column='managedemanddoCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='관리 요구도'
    )  
    manage_level = models.CharField(
        db_column='managelevelCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='키우기 난이도'
    )  
    origin = models.CharField(
        db_column='orgplceInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='원산지'
    )  
    posting_place = models.CharField(
        db_column='postngplaceCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='추천 배치 장소'
    )  
    propagation_era = models.CharField(
        db_column='prpgtEraInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='번식 시기'
    )  
    propagation_method = models.CharField(
        db_column='prpgtmthCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='번식 방법'
    )  
    smell = models.CharField(
        db_column='smellCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='냄새 정도'
    )  
    soil_info = models.CharField(
        db_column='soilInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='추천 토양'
    )  
    speical_manage_info = models.CharField(
        db_column='speclmanageInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='특별 관리 정보'
    )  
    toxicity_info = models.CharField(
        db_column='toxctyInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='독성 정보'
    )  
    water_cycle_autumn = models.CharField(
        db_column='watercycleAutumnCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='가을 물주기'
    )  
    water_cycle_spring = models.CharField(
        db_column='watercycleSprngCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='봄 물주기'
    )  
    water_cycle_summer = models.CharField(
        db_column='watercycleSummerCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='여름 물주기'
    )  
    water_cycle_winter = models.CharField(
        db_column='watercycleWinterCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='겨울 물주기'
    )  
    winter_lowest_temp = models.CharField(
        db_column='winterLwetTpCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='겨울 최저 온도'
    ) 
    img_url = models.CharField(
        db_column='imageURL',
        max_length=255,
        blank=True,
        null=True,
        verbose_name='식물 사진'
    )
    popular = models.IntegerField(
        verbose_name = '인기도'
    )

    class Meta:
        managed = False
        db_table = 'plant'

    @property
    def watering(self):
        watering_dict = {
            '화분 흙 대부분 말랐을때 충분히 관수함' : -1,
            '토양 표면이 말랐을때 충분히 관수함' : 0,
            '흙을 촉촉하게 유지함(물에 잠기지 않도록 주의)' : 1,
        }
        total = 0
        total += watering_dict.get(self.water_cycle_spring, 0)
        total += watering_dict.get(self.water_cycle_summer, 0)
        total += watering_dict.get(self.water_cycle_autumn, 0)
        total += watering_dict.get(self.water_cycle_winter, 0)

        return total


# 식물 키워드
class PlantKeyword(models.Model):
    id = models.OneToOneField(
        Plant,
        models.DO_NOTHING,
        db_column='id',
        primary_key=True
    )
    plant_no = models.CharField(
        db_column='cntntsNo',
        max_length=255,
        blank=True,
        null=True,
        verbose_name='식물 번호'
    )
    plant_name = models.CharField(db_column='cntntsSj',
        max_length=255,
        blank=True,
        null=True,
        verbose_name='식물 이름'
    )
    present_adequacy = models.IntegerField(
        db_column='presentAdequacy',
        blank=True,
        null=True,
        verbose_name='선물 적합성'
    )
    air_cleaning = models.IntegerField(
        db_column='airCleaning',
        blank=True,
        null=True,
        verbose_name='공기 정화 기능'
    )
    pm_cleaning = models.IntegerField(
        db_column='particulateMatter',
        blank=True,
        null=True,
        verbose_name='미세먼지 정화 기능'
    )
    pet_safe = models.IntegerField(db_column='petSafety',
        blank=True,
        null=True,
        verbose_name='반려동물 안전성'
    )
    humidify = models.IntegerField(db_column='humidify',
        blank=True,
        null=True,
        verbose_name='가습 효과'
    )
    toxicity = models.IntegerField(
        db_column='toxcty',
        blank=True,
        null=True,
        verbose_name='독성'
    )

    class Meta:
        managed = False
        db_table = 'plants_plantkeyword'