// https://www.redditstatic.com/desktop2x/NsfwBlockingModal.fe2c27e6481b5ba55815.js
// Retrieved at 6/14/2022, 5:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NsfwBlockingModal"], {
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/Footer/index.m.less"),
				i = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = c.a.div("UserAgreement", i.a), u = c.a.a("UserAgreementLink", i.a), _ = c.a.a("PrivacyLink", i.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(o.a)(i.a.FooterContainer, {
					[i.a.mIsGrey]: e.textColor === b.Grey,
					[i.a.mIsWhite]: e.textColor === b.White
				})
			}, s.a.createElement(m, null, d._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [d._param("=User Agreement", s.a.createElement(u, {
				href: `${a.a.redditUrl}/help/useragreement`
			}, d._("User Agreement", null, {
				hk: "YviZP"
			}))), d._param("=Privacy Policy.", s.a.createElement(_, {
				href: `${a.a.redditUrl}/help/privacypolicy`
			}, d._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), d._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./node_modules/lodash/noop.js"),
				c = n.n(o),
				l = n("./node_modules/react/index.js"),
				i = n.n(l),
				d = n("./node_modules/react-redux/es/index.js"),
				m = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				u = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				_ = n.n(u),
				b = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				C = n("./src/reddit/helpers/name/index.ts"),
				p = n("./src/reddit/selectors/platform.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = Object(r.a)(e => {
				const t = Object(d.e)(p.b),
					n = Object(d.e)(() => t ? Object(b.f)(t) : null),
					r = Object(d.e)(e => t ? Object(b.hb)(e, {
						pageLayer: t
					}) : null),
					s = Object(d.e)(e => t ? Object(b.Y)(e, {
						pageLayer: t
					}) : null);
				return i.a.createElement(m.a, {
					contentTitle: (() => {
						if (n === a.r.COMMENTS_PAGE || n === a.r.SUBREDDIT) {
							if (r) return Object(C.c)(r)
						} else if ((n === a.r.PROFILE_COMMENTS || n === a.r.PROFILE_OVERVIEW || n === a.r.PROFILE_POSTS) && s) return Object(C.d)(s);
						return null
					})()
				})
			});
			t.default = e => i.a.createElement(v, f({}, e, {
				className: Object(s.a)(e.className, _.a.modal),
				shouldBlurBackground: !0,
				onOverlayClick: c.a,
				overlayClassName: _.a.overlay
			}))
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/login.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/components/Footer/index.tsx"),
				C = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				v = n("./src/reddit/selectors/telemetry.ts");
			const h = "nsfw_dialog";
			var x = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, o.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), o.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), o.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				j = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				k = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				E = n.n(k);
			const y = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				O = e => {
					const t = Object(c.d)(),
						n = Object(C.b)(),
						r = Object(c.e)(j.f),
						m = Object(a.useCallback)(() => {
							r === j.a.Blurred && t(Object(_.k)({
								actionSource: _.a.NsfwBlockingModal
							}))
						}, [t, r]),
						b = (e => e ? o.a.createElement("div", {
							className: E.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), o.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : o.a.createElement("div", {
							className: E.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === j.a.Blurred);
					return Object(a.useEffect)(() => {
						Object(g.c)(r)
					}, [r]), o.a.createElement("div", {
						className: Object(d.a)(E.a.mainCta)
					}, o.a.createElement(x, null), b, o.a.createElement("div", {
						className: E.a.contentTitle
					}, e.contentTitle), o.a.createElement("div", {
						className: E.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), o.a.createElement("div", {
						className: E.a.buttonContainer
					}, o.a.createElement(f.j, {
						className: Object(d.a)(E.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(v.n)(e),
								source: "xpromo",
								action: "click",
								noun: h
							}))()), m(), Object(g.b)(g.a.Login), t(Object(u.i)())
						}
					}, (() => s.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), o.a.createElement(f.j, {
						className: E.a.cancel,
						onClick: () => {
							Object(i.b)(), n((() => e => ({
								...Object(v.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: h
							}))()), Object(g.b)(g.a.Dismiss), t(Object(l.b)("/"))
						}
					}, (() => s.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				w = Object(m.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return o.a.createElement("div", {
						className: E.a.qrCodeOuter
					}, o.a.createElement("div", {
						className: E.a.qrCodeInner
					}, o.a.createElement("img", {
						className: E.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), o.a.createElement("div", {
						className: E.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), o.a.createElement("div", {
						className: E.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), o.a.createElement("img", {
						className: E.a.sneakySnoo,
						src: t
					})))
				}),
				N = e => {
					const t = Object(C.b)();
					o.a.useEffect(() => {
						t((() => e => ({
							...Object(v.n)(e),
							source: "xpromo",
							action: "view",
							noun: h
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(c.e)(j.g), s = Object(c.e)(j.h), a = Object(c.e)(j.f), l = a === j.a.Blurred ? b.a.White : a === j.a.NoPreview ? b.a.Grey : void 0;
					return o.a.createElement("div", {
						className: E.a.container
					}, o.a.createElement(O, {
						contentTitle: n
					}), o.a.createElement("div", {
						className: Object(d.a)(E.a.footerWrapper, {
							[E.a.mIsModal]: a === j.a.Blurred
						})
					}, o.a.createElement(b.b, {
						textColor: l
					})), o.a.createElement(w, {
						qrCodeAsset: (() => r === p.Bc.Enabled || s === p.qb.BlurredPreview || s === p.qb.NoPreview ? y.d2x_nsfw_signup_blocking_de_v1 : y.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NsfwBlockingModal.fe2c27e6481b5ba55815.js.map