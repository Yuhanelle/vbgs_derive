# VBGS-SLAM: Mathematical Derivations

This site collects the full derivations for our **Variational Bayesian Gaussian Splatting SLAM** pipeline:
- Generative model over spatial + color components
- Pose and Lie-algebra modeling
- Variational updates (ELBO), E-step responsibilities, and M-step closed forms
- Mixture birth/split/prune rules aligned with Delta–Mixture coupling

> **TL;DR.** We model spatial components under an unknown SE(3) transform via a Lie-algebra Gaussian and treat color via fixed-covariance Delta components. The variational family couples pose and mixture updates for stable SLAM with streaming data.

See: [Generative model](derivations/generative-model.md) → [ELBO & VI](derivations/variational-inference.md).