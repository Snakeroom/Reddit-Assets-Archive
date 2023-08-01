// https://www.redditstatic.com/desktop2x/NewCommunityProgress.6b6ccea065f273d70b37.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NewCommunityProgress"], {
		"./src/lib/colors/constants.ts": function(e, A, t) {
			"use strict";
			t.d(A, "b", (function() {
				return n
			})), t.d(A, "e", (function() {
				return a
			})), t.d(A, "c", (function() {
				return s
			})), t.d(A, "a", (function() {
				return r
			})), t.d(A, "d", (function() {
				return o
			})), t.d(A, "f", (function() {
				return c
			})), t.d(A, "g", (function() {
				return g
			}));
			const n = "#000",
				a = "#FFF",
				s = "#FF4500",
				r = "#0079D3",
				o = "#46D160",
				c = {
					black: n,
					white: a,
					orangered: s,
					alienblue: r,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: s,
					downvote: "#7193FF",
					positive: o,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: s,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: s,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				g = {
					...c,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/lib/hooks/useMutation.ts": function(e, A, t) {
			"use strict";
			t.d(A, "a", (function() {
				return s
			}));
			var n = t("./node_modules/react/index.js"),
				a = t("./src/reddit/hooks/useGqlContext.ts");

			function s(e) {
				const A = Object(a.a)(),
					[t, s] = Object(n.useState)(!1),
					[r, o] = Object(n.useState)(!1),
					[c, g] = Object(n.useState)(null),
					[l, i] = Object(n.useState)(null);
				return [Object(n.useCallback)(async t => {
					let n, a;
					s(!0), o(!0);
					try {
						if ((a = (n = await e(A(), t)).body).error) throw new Error(a.error.message);
						i(a.data)
					} catch (c) {
						g(c)
					} finally {
						s(!1)
					}
				}, [A, e]), {
					data: l,
					error: c,
					pending: t,
					called: r
				}]
			}
		},
		"./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx": function(e, A, t) {
			"use strict";
			t.r(A), t.d(A, "default", (function() {
				return q
			}));
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
				r = t("./src/reddit/components/NewCommunityProgress/index.m.less"),
				o = t.n(r),
				c = t("./src/lib/classNames/index.ts"),
				g = t("./src/lib/hooks/useMutation.ts"),
				l = t("./src/reddit/actions/modal.ts"),
				i = t("./src/reddit/actions/subreddit/questions.ts"),
				d = t("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				C = t("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				f = t("./src/reddit/hooks/useTracking.ts"),
				B = t("./src/reddit/icons/svgs/svgIcons.tsx"),
				v = t("./src/reddit/models/NewCommunityProgress/index.ts"),
				E = t("./src/reddit/selectors/activeModalId.ts"),
				w = t("./src/reddit/selectors/subreddit.ts"),
				m = t("./src/reddit/selectors/user.ts"),
				P = t("./src/config.ts"),
				u = t("./node_modules/polished/dist/polished.es.js"),
				D = t("./node_modules/query-string/index.js"),
				Q = t("./src/lib/colors/constants.ts"),
				I = t("./src/lib/copyToClipboard/index.ts"),
				p = t("./src/reddit/actions/toaster.ts"),
				b = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				M = t("./src/reddit/components/ProgressBar/index.tsx"),
				x = t("./src/reddit/controls/Button/index.tsx"),
				j = t("./src/reddit/controls/TextButton/index.tsx"),
				H = t("./src/reddit/icons/fonts/index.tsx"),
				N = t("./src/reddit/models/Toast/index.ts"),
				O = t("./src/reddit/components/NewCommunityProgress/icons/index.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var A = 1; A < arguments.length; A++) {
						var t = arguments[A];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: L
			} = t("./node_modules/fbt/lib/FbtPublic.js"), y = (e, A) => e && function(e) {
				return "CommunityProgressUrlButton" === e.__typename
			}(e) ? e.url : e && function(e) {
				return "CommunityProgressMakePostButton" === e.__typename
			}(e) ? function(e, A) {
				var t;
				return `${P.a.redditUrl}${A}submit?${Object(D.stringify)({title:e.postTitle,text:null===(t=e.postBody)||void 0===t?void 0:t.markdown,frequency:e.postRepeatFrequency},{skipNull:!0})}`
			}(e, A) : void 0;

			function T(e) {
				let {
					className: A,
					color: t
				} = e;
				return a.a.createElement("svg", {
					className: A,
					viewBox: "0 0 1 1",
					preserveAspectRatio: "none"
				}, a.a.createElement("path", {
					style: {
						fill: Object(u.k)(.8, t)
					},
					d: "M 0 1 V 0 H 1 Z"
				}))
			}

			function k(e) {
				let {
					className: A,
					color: t
				} = e;
				return a.a.createElement("svg", {
					className: A,
					viewBox: "0 0 1 1",
					preserveAspectRatio: "none"
				}, a.a.createElement("path", {
					style: {
						fill: Object(u.k)(.8, t)
					},
					d: "M 0 0 V 1 H 1 Z"
				}))
			}
			var Y = Object(n.forwardRef)((e, A) => {
					let {
						id: t,
						title: n,
						bodyContent: r,
						iconIdentifier: g,
						isInNCPControlGroup: l,
						buttons: i,
						colorIdentifier: d,
						onActionCard: B = (() => {}),
						onClose: E = (() => {}),
						isNightMode: w,
						subredditUrl: m,
						progressModule: u,
						primaryButton: D,
						progress: Y,
						status: G
					} = e;
					var X, z;
					const R = Object(s.d)(),
						U = Object(f.a)(),
						J = O.b[g],
						K = J ? Object(H.b)(J) : null !== (X = O.a[g]) && void 0 !== X ? X : Object(H.b)("best"),
						V = w ? Q.g : Q.f,
						F = null !== (z = V[d]) && void 0 !== z ? z : V.downvote;

					function S(e) {
						(function(e) {
							return "CommunityProgressShareButton" === e.__typename
						})(e) && (Object(I.a)(`https://reddit.com${m}`), R(Object(p.f)(Object(p.e)("Copied community URL to clipboard!", N.b.SuccessCommunityGreen)))), l && E(v.b.CTA_BUTTON_CLICK), U(Object(C.b)(u, t, e.buttonText))
					}
					const Z = (null == Y ? void 0 : Y.done) / (null == Y ? void 0 : Y.total) * 100 || 0,
						W = y(D, m);
					return a.a.createElement("a", h({
						className: Object(c.a)(o.a.ncpCard, {
							[o.a.v2]: !l,
							[o.a.isCompleted]: G === v.a.COMPLETED,
							[o.a.nightMode]: !l && w
						})
					}, W && {
						href: W
					}, D && {
						onClick: () => S(D)
					}, {
						rel: "noopener noreferrer",
						target: "_blank",
						ref: A
					}), l ? a.a.createElement(a.a.Fragment, null, a.a.createElement(T, {
						color: F,
						className: Object(c.a)(o.a.stripe, o.a.stripeUp)
					}), a.a.createElement(k, {
						color: F,
						className: Object(c.a)(o.a.stripe, o.a.stripeDown)
					}), a.a.createElement(j.a, {
						className: Object(c.a)(o.a.headerButton, o.a.closeButton, o.a.og),
						onClick: () => E(v.b.HIDE_BUTTON_CLICK)
					}, a.a.createElement(b.b, null), a.a.createElement("div", null, L._("Close", null, {
						hk: "4gbyAA"
					}))), a.a.createElement("div", {
						className: o.a.iconCircle,
						style: {
							backgroundColor: F
						}
					}, a.a.createElement(K, {
						className: o.a.icon
					}))) : G === v.a.COMPLETED ? a.a.createElement("div", null, a.a.createElement("div", {
						className: o.a.completedIcon
					}, a.a.createElement(H.a, {
						name: "checkmark",
						className: Object(c.a)(o.a.icon, {
							[o.a.v2]: !l
						})
					}))) : a.a.createElement(K, {
						className: o.a.imageIcon
					}), a.a.createElement("div", {
						className: Object(c.a)(o.a.bodyContent, {
							[o.a.v2]: !l
						})
					}, a.a.createElement("h2", {
						className: Object(c.a)(o.a.title, {
							[o.a.v2]: !l
						})
					}, n), a.a.createElement("p", {
						className: Object(c.a)(o.a.bodyText, {
							[o.a.v2]: !l
						})
					}, null == r ? void 0 : r.markdown), (null == Y ? void 0 : Y.total) > 1 && a.a.createElement("div", {
						className: o.a.progressCardContainer
					}, a.a.createElement("div", {
						className: o.a.progressLabels
					}, L._("Progress", null, {
						hk: "1Riqmr"
					}), a.a.createElement("div", {
						className: o.a.ratio
					}, Y.done, "/", Y.total)), a.a.createElement(M.a, {
						className: o.a.progressBar,
						innerBarClassName: o.a.innerBar,
						percent: Z
					})), !l && G !== v.a.COMPLETED && a.a.createElement(j.a, {
						className: Object(c.a)(o.a.headerButton, o.a.menuButton),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), B()
						}
					}, a.a.createElement(H.a, {
						name: "overflow_horizontal"
					}), a.a.createElement("div", null, L._("Close", null, {
						hk: "4gbyAA"
					}))), i.length > 0 && a.a.createElement("div", null, i.map(e => {
						const A = y(e, m),
							t = l ? {
								backgroundColor: F,
								borderColor: F,
								color: "white"
							} : {},
							n = {
								className: o.a.button,
								onClick: () => S(e),
								style: t
							},
							s = !!(null == A ? void 0 : A.startsWith(P.a.redditUrl));
						return A ? s ? a.a.createElement(x.t, h({}, n, {
							key: e.buttonText,
							kind: x.b.InternalLink,
							to: A
						}), e.buttonText) : a.a.createElement(x.t, h({}, n, {
							key: e.buttonText,
							kind: x.b.ExternalLink,
							href: A
						}), e.buttonText) : a.a.createElement(x.t, h({}, n, {
							key: e.buttonText
						}), e.buttonText)
					}))))
				}),
				G = t("./node_modules/fbt/lib/FbtPublic.js"),
				X = t("./src/higherOrderComponents/asModal/index.tsx");
			var z = Object(X.a)(e => {
				const {
					onCloseModal: A,
					onCompleteCard: t,
					onDismissCard: n
				} = e;
				return a.a.createElement(b.e, null, a.a.createElement(b.i, {
					className: o.a.modalHeader
				}, G.fbt._("Remove this task?", null, {
					hk: "3eHFY8"
				}), a.a.createElement(j.a, {
					className: o.a.closeModalButton,
					onClick: A
				}, a.a.createElement(b.b, null))), a.a.createElement(b.l, {
					className: o.a.modalMain
				}, G.fbt._("If you remove this task, you won’t be able to see it anymore.", null, {
					hk: "ycdgz"
				})), a.a.createElement(b.g, null, a.a.createElement(x.t, {
					className: o.a.modalButton,
					onClick: A,
					priority: x.c.Secondary
				}, G.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), a.a.createElement(x.t, {
					className: o.a.modalButton,
					onClick: t,
					priority: x.c.Secondary
				}, G.fbt._("Mark as complete", null, {
					hk: "4kKkLF"
				})), a.a.createElement(x.t, {
					className: o.a.modalButton,
					onClick: n
				}, G.fbt._("Remove", null, {
					hk: "3tYl0U"
				}))))
			});
			var R = e => a.a.createElement("svg", {
				className: e.className,
				width: "60",
				height: "60",
				viewBox: "0 0 60 60",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				xmlnsXlink: "http://www.w3.org/1999/xlink"
			}, a.a.createElement("rect", {
				width: "60",
				height: "60",
				fill: "url(#pattern0)"
			}), a.a.createElement("defs", null, a.a.createElement("pattern", {
				id: "pattern0",
				patternContentUnits: "objectBoundingBox",
				width: "1",
				height: "1"
			}, a.a.createElement("use", {
				xlinkHref: "#image0",
				transform: "scale(0.00195312)"
			})), a.a.createElement("image", {
				id: "image0",
				width: "512",
				height: "512",
				xlinkHref: "data:image/png;base64,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"
			})));
			const {
				fbt: U
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var J = Object(n.forwardRef)((e, A) => {
					let {
						isLastAvailable: t,
						onCompleteModule: n
					} = e;
					return a.a.createElement("button", {
						className: o.a.completeModuleCard,
						onClick: n,
						ref: A
					}, t && a.a.createElement(R, {
						className: o.a.completeFinalIcon
					}), a.a.createElement("div", null, a.a.createElement("div", {
						className: o.a.header
					}, t ? U._("And that's a wrap!", null, {
						hk: "2FMXh0"
					}) : U._("Let's keep going!", null, {
						hk: "3tnJxD"
					})), a.a.createElement("div", null, t ? U._("Your to-do's are all done and your community is on its way to greatness.", null, {
						hk: "19KsIY"
					}) : U._("Get more tips and quick to-dos to help your community grow.", null, {
						hk: "1Ggc77"
					}))), a.a.createElement(B.b, {
						className: o.a.arrowIcon
					}))
				}),
				K = t("./src/reddit/components/NewCommunityProgress/icons/Progress.m.less"),
				V = t.n(K);
			var F = e => {
				let A = e.percentage;
				A < 0 && (A = 0), A > 100 && (A = 100);
				const t = (100 - A) / 100 * (80 * Math.PI);
				return a.a.createElement("div", {
					id: "cont",
					"data-pct": e.ratioString,
					className: Object(c.a)(e.className, V.a.cont)
				}, a.a.createElement("svg", {
					id: "svg",
					width: "64",
					height: "64",
					viewBox: "0 0 100 100",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("circle", {
					className: V.a.innerCircle,
					r: "40",
					cx: "50",
					cy: "50",
					fill: "transparent",
					strokeDasharray: "565.48",
					strokeDashoffset: "0"
				}), a.a.createElement("circle", {
					strokeDashoffset: t,
					className: V.a.outerCircle,
					id: "bar",
					r: "40",
					cx: "50",
					cy: "50",
					fill: "transparent",
					strokeDasharray: "250",
					style: 0 === A ? {
						display: "none"
					} : {}
				})))
			};

			function S() {
				return (S = Object.assign || function(e) {
					for (var A = 1; A < arguments.length; A++) {
						var t = arguments[A];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Z
			} = t("./node_modules/fbt/lib/FbtPublic.js"), W = "NCPV2--Modal--ActionCardModal";

			function q(e) {
				let {
					closeModuleOnMount: A,
					subredditId: t,
					progressModule: r
				} = e;
				var P, u;
				const D = r.id === v.c;
				let Q;
				Q = r.cards;
				const I = Object(n.useRef)(null),
					[p, b] = Object(n.useState)(!A),
					M = Object(s.e)(m.fb),
					x = Object(s.e)(e => Object(w.db)(e, t)),
					j = Object(f.a)();
				Object(n.useEffect)(() => {
					j(Object(C.g)(r, p ? "expanded_module" : "collapses_module"))
				}, [p]);
				const [H] = Object(g.a)(d.d), N = Object(s.d)();
				const [O] = Object(g.a)(d.e);
				const [h, L] = Object(n.useState)(void 0), [y] = Object(g.a)(d.a);
				const T = Object(s.e)(E.a) === W;
				async function k() {
					T && L(void 0), N(Object(l.i)(W))
				}
				const [G] = Object(g.a)(d.b);
				const X = Object(n.useRef)(),
					R = Object(n.useRef)(null),
					U = Q.findIndex(e => e.status === v.a.INITIAL || e.status === v.a.ACTIONED),
					K = D ? 0 : U;
				if (Object(n.useEffect)(() => {
						const e = (null == X ? void 0 : X.current) || R.current;
						(null == e ? void 0 : e.parentNode) && (e.parentNode.scrollTop = (null == e ? void 0 : e.offsetTop) - e.parentNode.offsetTop - 20)
					}, [X, r, p]), 0 === r.cards.length) return null;
				const V = () => Q.map((e, A) => {
						if (D && A > 2) return;
						const n = {
							key: e.id,
							isInNCPControlGroup: D,
							isNightMode: M,
							onClose: A => (async function(e, A) {
								await H({
									input: {
										subredditId: t,
										cardId: e,
										action: A
									}
								}), j(Object(C.e)(r, e)), N(Object(i.b)(t))
							})(e.id, A),
							subredditUrl: null != x ? x : "",
							progressModule: r,
							...e
						};
						return D ? a.a.createElement(Y, n) : a.a.createElement(Y, S({}, n, {
							ref: A === K ? X : void 0,
							onActionCard: () => (async function(e) {
								L(e), j(Object(C.a)(r, e)), k()
							})(e.id)
						}))
					}),
					Z = 0 === (null === (P = r.progress) || void 0 === P ? void 0 : P.done) ? 0 : (null === (u = r.progress) || void 0 === u ? void 0 : u.done) ? r.progress.done / r.progress.total * 100 : void 0,
					q = r.cards.find(e => e.status === v.a.INITIAL || e.status === v.a.ACTIONED);
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("details", {
					ref: I,
					open: p,
					className: Object(c.a)(o.a.ncpWidget, {
						[o.a.og]: D
					}),
					onToggle: () => {
						var e;
						const A = !!(null === (e = I.current) || void 0 === e ? void 0 : e.open);
						b(A), j(A ? Object(C.f)(r) : Object(C.c)(r))
					}
				}, a.a.createElement("summary", {
					className: Object(c.a)(o.a.ncpHeading, {
						[o.a.v2]: !D
					})
				}, D ? a.a.createElement("span", {
					className: o.a.displayText
				}, r.displayText) : (() => {
					var e, A;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: o.a.moduleText
					}, a.a.createElement("div", {
						className: o.a.titleText
					}, r.displayText), a.a.createElement("div", {
						className: o.a.descriptionText
					}, r.description)), void 0 !== Z && a.a.createElement(F, {
						className: o.a.progressCircle,
						percentage: Z,
						ratioString: `${null===(e=r.progress)||void 0===e?void 0:e.done}/${null===(A=r.progress)||void 0===A?void 0:A.total}`
					}))
				})(), p ? a.a.createElement(B.d, {
					className: Object(c.a)(o.a.chevron, {
						[o.a.v2]: !D
					})
				}) : a.a.createElement(B.c, {
					className: Object(c.a)(o.a.chevron, {
						[o.a.v2]: !D
					})
				}), !p && a.a.createElement("div", {
					className: Object(c.a)(o.a.dot, {
						[o.a.v2]: !D
					})
				})), D ? V() : a.a.createElement("div", {
					className: o.a.cardContainer
				}, V(), !q && a.a.createElement(J, {
					isLastAvailable: r.isLastAvailable,
					onCompleteModule: async function() {
						const e = r.id;
						await G({
							input: {
								subredditId: t,
								moduleId: e
							}
						}), N(Object(i.b)(t))
					},
					ref: R
				}))), T && a.a.createElement(z, {
					onCloseModal: k,
					onCompleteCard: () => h && async function(e) {
						await y({
							input: {
								subredditId: t,
								cardId: e
							}
						}), j(Object(C.d)(r, e)), N(Object(i.b)(t)), T && k()
					}(h),
					onDismissCard: () => h && async function(e) {
						await O({
							input: {
								subredditId: t,
								cardId: e
							}
						}), j(Object(C.e)(r, e)), N(Object(i.b)(t)), T && k()
					}(h),
					withOverlay: !0
				}))
			}
		},
		"./src/reddit/components/NewCommunityProgress/icons/Progress.m.less": function(e, A, t) {
			e.exports = {
				cont: "_2UJ62dZriZvrWjzeICTg19",
				fillProgressCircle: "_2mIhGywYIjH_3x2F1thzzk",
				innerCircle: "iN4ncJ_JJRyBRpucP2Ne3",
				outerCircle: "_2U5k6TcrvhLXXzxbZoMnsR"
			}
		},
		"./src/reddit/components/NewCommunityProgress/index.m.less": function(e, A, t) {
			e.exports = {
				ncpWidget: "_3YDlbacMM1vXlnIwwiZaw",
				og: "IiBg8V3DB7kbGJTXjmSx3",
				ncpHeading: "_3diY46QRgoCQoBAl3nuOkB",
				displayText: "_1pE0s9tNKh9IdlQS79hB62",
				v2: "nw2uWPF7pemgj5oHV1XKl",
				descriptionText: "okl_xKWiHAXR54GGC236V",
				progressCircle: "_1yoRfc8c2a8ufKpH2mEsr5",
				cardContainer: "_3GJg33rFkbGE3l3fB44j0J",
				menuButton: "_3xyi3kO9YkV9j7x5600_KC",
				closeButton: "WTREiP3sQ8usBShDW0sTN",
				headerButton: "_25msyEaogWclvFrvRa0Eu2",
				chevron: "v3pKVc9S7s-8XcRDMGAhh",
				dot: "_20d2EpHqvWq_dGcvYFPYjr",
				ncpCard: "_3CAiO1C0aUjv2nxiu1fyr8",
				nightMode: "_2xK_E0zsPYNo02vpW2Cc52",
				isCompleted: "R-breYGozVYXJk4PUjZSz",
				stripe: "_2hjfwI45duenRC4CnFQJSH",
				stripeUp: "_2jNwELabjySzKNyW1VUkrV",
				stripeDown: "_1Da2-1LiTl4fR0YhCcFHuW",
				iconCircle: "GQHNmTs_Ee429ftHyCONS",
				completedIcon: "hkNkPYYOFvwmQQGCcD9zp",
				icon: "_2Q_cCgKoPZ0SN7kfoONVsA",
				imageIcon: "_3LiFH-tyRSmtPawQ_TYGGO",
				bodyContent: "_1OAW1-cqxgTiqbunc_ZkBS",
				title: "_2mgPtZpyn1KEJL1s1MeMbO",
				bodyText: "uoN8_aKEPh_28cElE6IRe",
				progressCardContainer: "_3tfIBdcMedsq1WCQT1GfJC",
				progressLabels: "_1DlCAeOiSZsFqK1GlmNMJf",
				ratio: "_2Gl5zQAHNs1coaGJ9hDplJ",
				progressBar: "_10sT_pkTg_jKCBp3W9LwZj",
				innerBar: "_11tVOlS4bHX7Bt63GddyUj",
				button: "_1zhBaOxJ0Moon4XzsEHy0o",
				completeModuleCard: "_3oAZkBj_zpIAEY6M24JGiY",
				completeFinalIcon: "_3jWGGQG4RLuqQsKINb5uWH",
				header: "LT3zxoiJxjK_9kL6LvfYh",
				arrowIcon: "_2yWqsdY_HjXGqAkLzb5b_B",
				modalHeader: "_3_VVBuoeiiE1iWpgpFigXE",
				closeModalButton: "iH241dKmoLaCuHhIj9QB6",
				modalMain: "_1jh9OVmZpKRxAopcbs0M57",
				modalButton: "M9drB9tJBpBKUQZ9ZZQQF"
			}
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, A, t) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/components/ProgressBar/index.m.less"),
				o = t.n(r);
			A.a = e => {
				let {
					className: A,
					innerBarClassName: t,
					percent: n
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(o.a.outerBar, A)
				}, a.a.createElement("div", {
					className: Object(s.a)(o.a.innerBar, t),
					style: {
						width: `${n.toFixed(2)}%`
					}
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, A, t) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				o = t.n(r);

			function c() {
				return (c = Object.assign || function(e) {
					for (var A = 1; A < arguments.length; A++) {
						var t = arguments[A];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			A.a = e => {
				let {
					className: A,
					...t
				} = e;
				return a.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(s.a)(o.a.checkbox, A)
				}, t), a.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var A = 1; A < arguments.length; A++) {
						var t = arguments[A];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			A.a = e => a.a.createElement("svg", s({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), a.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, a.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), a.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), a.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), a.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), a.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), a.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), a.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), a.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, a.a.createElement("g", null, a.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), a.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, A, t) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				o = t.n(r);

			function c() {
				return (c = Object.assign || function(e) {
					for (var A = 1; A < arguments.length; A++) {
						var t = arguments[A];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			A.a = e => a.a.createElement("svg", c({}, e, {
				className: Object(s.a)(o.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var A = 1; A < arguments.length; A++) {
						var t = arguments[A];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			A.a = e => a.a.createElement("svg", s({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				s = t("./src/reddit/constants/colors.ts");
			A.a = e => a.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, a.a.createElement("g", null, a.a.createElement("circle", {
				fill: s.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, A, t) {
			"use strict";
			t.d(A, "a", (function() {
				return s
			}));
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);

			function s(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, a.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#bluePinkGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
					id: "bluePinkGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#6A5CFF"
				}), a.a.createElement("stop", {
					offset: "1",
					stopColor: "#E4ABFF"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), a.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			A.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, A, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				s = t("./src/lib/CSSVariableProvider/withTheme.tsx"),
				r = t("./src/reddit/constants/colors.ts"),
				o = t("./src/reddit/models/Theme/NewColorSystem/index.ts");
			A.a = Object(s.a)(e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: e.color || Object(o.a)(e).bodyText
			}, a.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), a.a.createElement("circle", {
				fill: r.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), a.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), a.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), a.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), a.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), a.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommunityProgress.6b6ccea065f273d70b37.js.map