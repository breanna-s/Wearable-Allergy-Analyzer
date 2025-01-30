import openmeteo_requests
import requests_cache
import pandas as pd
from retry_requests import retry

# Setup the Open-Meteo API client with cache and retry on error
cache_session = requests_cache.CachedSession('.cache', expire_after = 3600)
retry_session = retry(cache_session, retries = 5, backoff_factor = 0.2)
openmeteo = openmeteo_requests.Client(session = retry_session)

# Make sure all required weather variables are listed here
# The order of variables in hourly or daily is important to assign them correctly below
url = "https://air-quality-api.open-meteo.com/v1/air-quality"
params = {
	"latitude": 52.52,
	"longitude": 13.41,
	"current": ["us_aqi", "ozone", "dust", "alder_pollen", "birch_pollen", "grass_pollen", "mugwort_pollen", "olive_pollen", "ragweed_pollen"],
	"forecast_days": 7,
	"domains": "cams_global"
}
responses = openmeteo.weather_api(url, params=params)

# Process first location. Add a for-loop for multiple locations or weather models
response = responses[0]
print(f"Coordinates {response.Latitude()}°N {response.Longitude()}°E")
print(f"Elevation {response.Elevation()} m asl")
print(f"Timezone {response.Timezone()} {response.TimezoneAbbreviation()}")
print(f"Timezone difference to GMT+0 {response.UtcOffsetSeconds()} s")


# Current values. The order of variables needs to be the same as requested.
current = response.Current()

current_us_aqi = current.Variables(0).Value()

current_ozone = current.Variables(1).Value()

current_dust = current.Variables(2).Value()

current_alder_pollen = current.Variables(3).Value()

current_birch_pollen = current.Variables(4).Value()

current_grass_pollen = current.Variables(5).Value()

current_mugwort_pollen = current.Variables(6).Value()

current_olive_pollen = current.Variables(7).Value()

current_ragweed_pollen = current.Variables(8).Value()

print(f"Current time {current.Time()}")

print(f"Current us_aqi {current_us_aqi}")
print(f"Current ozone {current_ozone}")
print(f"Current dust {current_dust}")
print(f"Current alder_pollen {current_alder_pollen}")
print(f"Current birch_pollen {current_birch_pollen}")
print(f"Current grass_pollen {current_grass_pollen}")
print(f"Current mugwort_pollen {current_mugwort_pollen}")
print(f"Current olive_pollen {current_olive_pollen}")
print(f"Current ragweed_pollen {current_ragweed_pollen}")