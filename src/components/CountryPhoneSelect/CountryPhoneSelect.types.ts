export type CountryAreaDataSelect = {
  code: string
  image: string
  name: string
}

export type CountryPhoneSelectProps = {
  className?: string
  countries: CountryAreaDataSelect[]
  setValue: (data: CountryAreaDataSelect) => void
  value?: CountryAreaDataSelect
}
