## Clustering

1. **An unsupervised learning algorithm: application to the discrimination of seismic events and quarry blasts in the vicinity of Istanbul**

<img align="left" width="300" height="200=0" src="./publications/figure1.png">

The results of the application of an unsupervised learning (neural network) approach comprising a Self Organizing Map (SOM), to distinguish micro-earthquakes from quarry blasts in the vicinity of Istanbul, Turkey, are presented and discussed. The SOM is constructed as a neural classifier and complementary reliability estimator to distinguish seismic events, and was employed for varying map sizes. Input parameters consisting of frequency and time domain data (complexity, spectral ratio, S/P wave amplitude peak ratio and origin time of events) extracted from the vertical components of digital seismograms were estimated as discriminants for 179 (1.8 < Md < 3.0) local events. The results show that complexity and amplitude peak ratio parameters of the observed velocity seismogram may suffice for a reliable discrimination, while origin time and spectral ratio were found to be fuzzy and misleading classifiers for this problem. The SOM discussed here achieved a discrimination reliability that could be employed routinely in observatory practice; however, about 6% of all events were classified as ambiguous cases. This approach was developed independently for this particular classification, but it could be applied to different earthquake regions. [pdf](./publications/pub1.pdf)

2. **Clustering Seismic Activities Using Linear and Nonlinear
Discriminant Analysis**

<img align="right" width="300" height="300" src="./publications/figure2.png">

Identification and classification of different seismo-tectonic events with similar characteristics
in a region of interest is one of the most important subjects in seismic hazard studies. In this study,
linear and nonlinear discriminant analyses have been applied to classify seismic events in the vicinity of
Istanbul. The vertical components of the digital velocity seismograms are used for seismic events with
magnitude (Md) between 1.8 and 3.0 that occurred between 2001 and 2004. Two, time dependent parameters,
complexity and S/P peak amplitude ratio are selected as predictands. Linear, quadratic, diaglinear
and diagquadratic discriminant functions are investigated. Accuracy of methods with an additional
adjusted quadratic models are 96.6%, 96.6%, 95.5%, 96.6%, and 97.6%, respectively with a various
misclassified rate for each class. The performances of models are justified with cross validation and
resubstitution error. Although all models remarkably well performed, adjusted quadratic function
achieved the best success rate with just 4 misclassified events out of 179, even better compared to complex
methods such as, self organizing method, k-means, Gaussion mixture models that applied to same
dataset in literature. [pdf](./publications/pub2.pdf)

3. **Application of k-means and Gaussian mixture model for
classification of seismic activities in Istanbul**

<img align="left" width="300" height="300" src="./publications/figure3.png">

Two unsupervised pattern recognition algorithms,
k-means, and Gaussian mixture model (GMM) analyses have
been applied to classify seismic events in the vicinity of Istanbul.
Earthquakes, which are occurring at different seismicity
rates and extensions of the Thrace-Eskisehir Fault
Zone and the North Anatolian Fault (NAF), Turkey, are being
contaminated by quarries operated around Istanbul. We have
used two time variant parameters, complexity, the ratio of integrated
powers of the velocity seismogram, and S/P amplitude
ratio as classifiers by using waveforms of 179 events
(1.8 <M < 3.0). We have compared two algorithms with
classical multivariate linear/quadratic discriminant analyses.
The total accuracies of the models for GMM, k-means, linear
discriminant function (LDF), and quadratic discriminant
function (QDF) are 96.1 %, 95.0 %, 96.1 %, 96.6 %, respectively.
The performances of models are discussed for earthquakes
and quarry blasts separately. All methods clustered
the seismic events acceptably where QDF slightly gave better
improvements compared to others. We have found that
unsupervised clustering algorithms, for which no a-prior target
information is available, display a similar discriminatory
power as supervised methods of discriminant analysis. [pdf](./publications/pub3.pdf)



## Artificial Neural Networks

1. **Real-Time Ground Motion Forecasting Using Front-Site
Waveform Data Based on Artificial Neural Network**

<img align="right" width="300" height="300" src="./publications/figure4.png">

Real-time earthquake information made available by
the Japan Meteorological Agency (JMA) publicly
since October 2007 is intended to dramatically reduce
human casualties and property damage following
earthquakes. Its current limitations, however,
such as a lack of applicability to near-source earthquakes
and the insufficient accuracy of seismic ground
motion intensity leave much to be desired. The authors
have suggested that the forward use of frontsite
waveform data leads to improve accuracy of realtime
ground motion prediction. This paper presents
an advanced methodology based on artificial neural
networks (ANN) for the forward forecasting of ground
motion parameters, not only peak ground acceleration
and velocity but also spectral information before
S wave arrival using the initial P waveform at a front
site. Estimated earthquake ground motion information
can be used as a warning to lessen human casualties
and property damage. Fourier amplitude spectra
estimated highly accurately before strong shaking can
be used for advanced engineering applications, e.g.,
feed-forward structural control. The validity and applicability of the proposed method have been verified
using Kyoshin Network (K-NET) observation datasets
for 39 earthquakes occurring in the Miyagi Oki area.[pdf](./publications/pub5.pdf)


2. **FORWARD SPECTRAL FORECASTING OF GROUND MOTION WITH THE INFORMATION OF EARTHQUAKE EARLY WARNING SYSTEMS FOR STRUCTURAL CONTROL**

<img align="left" width="300" height="250" src="./publications/figure5.png">

There has been steady progress in research and development of earthquake early warning systems and its application to structural control. In this paper our proposed methodology about forecasting frequency contents of strong motion is first introduced, then its application to feed forward structural control with the usage of semi active control devices is simulated, and lastly it is showed that non-resonance structural control can be achieved before the strong motion of an upcoming earthquake reaches to a building of interest.


## Signal Processing

1. **On the use of Stockwell transform in structural dynamic
analysis**

<img align="right" width="600" height="250" src="./publications/figure6.png">

Time-frequency analysis of earthquake records using Fourier transform
is a fundamental, reliable and useful tool in earthquake engineering and engineering
seismology. It will be however no longer functional if the frequency variation is
analysed in time domain. Short time Fourier transform is utilized for the same purpose
but this has also its own limitations and restrictions. In this research, Stockwell
transform (S-transform), is evaluated in investigating frequency content of signal in
time domain. First, the effectiveness of S-transform was tested by a non-stationary
synthetic signal series with a sum of various instantaneous time varying frequency
functions. Then, transform was employed to three different earthquake waveforms of
Iwate-Miyagi Nairiku earthquake (Mw 6.9, 2008); recorded in near, moderate and far
sites. Finally, an application was demonstrated for determining dynamic response of
three-story frame structure by using El Centro earthquake compiled with harmonic
motion. Unlike widely used continuous wavelet transform, which provides temporal
and spectral information simultaneously, S-transform is very straightforward and easy
to manipulate for interpretations. All cases considered in this research showed that Stransform
can be implemented for further research activities related with frequencydependent
strong motion analysis by practitioners and engineers. S-transform can
distinguish abrupt frequency changes in structures effectively and accurately. [pdf](./publications/pub6.pdf)
