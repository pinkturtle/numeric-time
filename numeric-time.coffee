Number::millisecond = Number::milliseconds = -> @valueOf()
Number::second      = Number::seconds      = -> @miliseconds() * 1000
Number::minute      = Number::minutes      = -> @seconds() * 60
Number::hour        = Number::hours        = -> @minutes() * 60
