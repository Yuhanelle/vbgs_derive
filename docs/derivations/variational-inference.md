# Variational Inference (ELBO)

We maximize the evidence lower bound (ELBO):
$$
\mathcal{L}(q) \;=\; \mathbb{E}_q[\log p(\mathbf{X},\mathbf{Z},\Theta)] - \mathbb{E}_q[\log q(\mathbf{Z},\Theta)].
\tag{1}
$$

For responsibilities $\gamma_{nk}$,
$$
\gamma_{nk} \;\propto\; 
\pi_k \exp\!\Big(
\mathbb{E}_q[\log p(\mathbf{x}_n \mid z_n=k, \Theta)]
+ \mathbb{E}_q[\log p(z_n=k \mid \pi)]
\Big),
\tag{2}
$$

with pose-dependent likelihood under SE(3):
$$
\mathbf{x}_n \sim \mathcal{N}\!\big(R(\boldsymbol{\xi})\,\mu_k + \mathbf{t}(\boldsymbol{\xi}),\, \Sigma_k\big), 
\quad \boldsymbol{\xi}\in\mathfrak{se}(3).
\tag{3}
$$

Refer to [Mixture updates](mixture-updates.md) for $\{\pi_k,\mu_k,\Sigma_k\}$ updates and to
[Pose optimization](pose-optim.md) for Jacobians using the wedge operator.
