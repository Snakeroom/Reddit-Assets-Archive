// https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.ed960203832111f706dc.js
// Retrieved at 9/9/2020, 4:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceReleaseNotesModal"], {
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let r;
			const s = new Map,
				a = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), r = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!a.get(t)) {
						a.set(t, n);
						const r = s.get(t);
						if (r) {
							r(e, n && !!a.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const o = (e, t) => {
					try {
						s.set(e, t), r && r.observe(e)
					} catch (n) {
						0
					}
				},
				i = e => {
					try {
						s.delete(e), r && r.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(c);
			t.a = Object(a.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), n && n()
					}
				}
			})((function(e) {
				return s.a.createElement(d.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(i);

			function c(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(d.a.container, e.className)
				}, s.a.createElement("div", {
					className: d.a.title
				}, e.children), s.a.createElement(o.a, null))
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less": function(e, t, n) {
			e.exports = {
				date: "_1by4A-0PLBX13RXvipwRcH"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less": function(e, t, n) {
			e.exports = {
				media: "MIDgJ92fubZO3ngkh6ERh",
				text: "_3cbhcaToRzSvS3AZHJJvLi",
				title: "_1nM99kzHmBctirluJKfGFl"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_16aq4YoQYc6_O-E66cDxvD",
				container: "sBFMqVph7JM7fhtn8VIiv",
				prev: "_29Q_dDO_ANxqcMkzCOmsm-"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1eV0V57guaBVMeKljYRDZV",
				dot: "_1W94VLaridFHpaS6aIPX0M",
				dotSelected: "_8B-dKG9AXPQlHigF1i1sJ"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/index.m.less": function(e, t, n) {
			e.exports = {
				controls: "_1d3JALELQYjabIq8gl2EoW",
				controlBox: "_3yJ4xUsPnm94-kYEcZTx2F",
				title: "_1j-YFVTgvDYE6azr1ERUw9"
			}
		},
		"./src/reddit/components/Governance/ReleaseNotesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				l = n("./src/reddit/constants/keycodes.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/selectors/gov.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				h = n("./src/lib/classNames/index.ts"),
				b = n("./node_modules/shallowequal/index.js"),
				x = n.n(b),
				f = n("./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less"),
				g = n.n(f);

			function v(e) {
				return [e.getDate(), e.getMonth(), e.getFullYear()]
			}

			function y(e) {
				const t = (n = new Date(Date.now() + 60 * (new Date).getTimezoneOffset() * 1e3), s = new Date(e.date), x()(v(n), v(s)));
				var n, s;
				return a.a.createElement("div", {
					className: Object(h.a)(g.a.date, e.className)
				}, t ? r.fbt._("today", null, {
					hk: "4pfpUs"
				}) : function(e) {
					const [t, , n] = v(e);
					return "".concat(e.toLocaleString("en-US", {
						month: "short"
					}), " ").concat(t, ", ").concat(n)
				}(new Date(e.date)))
			}
			var w = n("./src/reddit/components/Media/index.tsx"),
				N = n("./src/reddit/components/RichTextJson/index.tsx"),
				E = n("./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less"),
				j = n.n(E);
			const O = {};

			function _(e) {
				return a.a.createElement("div", {
					className: e.className
				}, a.a.createElement("div", {
					className: j.a.title
				}, e.releaseNote.title), e.releaseNote.media && "rtjson" === e.releaseNote.media.type ? a.a.createElement("div", {
					className: j.a.text
				}, a.a.createElement(N.a, {
					content: e.releaseNote.media.richtextContent,
					mediaMetadata: e.releaseNote.media.mediaMetadata,
					rtJsonElementProps: O
				})) : a.a.createElement("div", {
					className: j.a.media
				}, a.a.createElement(w.a, {
					isListing: !0,
					isNotCardView: !1,
					primaryContent: !0,
					shouldLoad: !0,
					showCentered: !0,
					showFull: !0,
					post: e.releaseNote
				})))
			}
			var I = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				R = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less"),
				k = n.n(R);

			function T(e) {
				return a.a.createElement("div", {
					className: Object(h.a)(k.a.container, e.className)
				}, !e.isFirst && a.a.createElement(I.i, {
					className: k.a.prev,
					onClick: e.onPrevSlide
				}, a.a.createElement(M.a, {
					className: k.a.arrow
				})), a.a.createElement(I.f, {
					onClick: e.isLast ? e.onClose : e.onNextSlide
				}, e.isLast ? r.fbt._("done", null, {
					hk: "2XjG3a"
				}) : r.fbt._("next", null, {
					hk: "2uULSy"
				})))
			}
			var S = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less"),
				C = n.n(S);

			function L(e) {
				return a.a.createElement("div", {
					className: Object(h.a)(C.a.container, e.className)
				}, Array.from({
					length: e.totalSlides
				}).map((t, n) => a.a.createElement("div", {
					className: Object(h.a)(C.a.dot, {
						[C.a.dotSelected]: n === e.currentSlide
					})
				})))
			}
			var D = n("./src/reddit/components/Governance/ReleaseNotesModal/index.m.less"),
				P = n.n(D);
			class G extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentlyViewingIndex: 0
					}, this.handleViewNextSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.min(e.currentlyViewingIndex + 1, this.props.releaseNotes.length - 1)
					})), this.handleViewPrevSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.max(e.currentlyViewingIndex - 1, 0)
					})), this.handleKeyDown = e => {
						switch (e.key) {
							case l.b.ArrowRight:
								return this.handleViewNextSlide();
							case l.b.ArrowLeft:
								return this.handleViewPrevSlide();
							case l.b.Escape:
								return this.props.onClose()
						}
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleKeyDown)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleKeyDown)
				}
				render() {
					if (!this.props.subreddit) return null;
					const e = this.props.releaseNotes[this.state.currentlyViewingIndex];
					return a.a.createElement("div", null, a.a.createElement(c.a, {
						className: P.a.title
					}, r.fbt._("What's New in {subredditName}?", [r.fbt._param("subredditName", this.props.subreddit.displayText)], {
						hk: "31ALcQ"
					})), a.a.createElement(_, {
						releaseNote: e
					}), a.a.createElement("div", {
						className: P.a.controls
					}, a.a.createElement(y, {
						className: P.a.controlBox,
						date: e.created
					}), a.a.createElement(L, {
						className: P.a.controlBox,
						currentSlide: this.state.currentlyViewingIndex,
						totalSlides: this.props.releaseNotes.length
					}), a.a.createElement(T, {
						className: P.a.controlBox,
						isFirst: 0 === this.state.currentlyViewingIndex,
						isLast: this.state.currentlyViewingIndex === this.props.releaseNotes.length - 1,
						onClose: this.props.onClose,
						onNextSlide: this.handleViewNextSlide,
						onPrevSlide: this.handleViewPrevSlide
					})))
				}
			}
			const V = Object(p.c)({
					releaseNotes: m.k,
					subreddit: u.q
				}),
				A = Object(o.b)(V, e => ({
					onClose: () => e(Object(d.f)())
				})),
				H = Object(u.t)();
			t.default = Object(i.a)(H(A(G)))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/page.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				h = d.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(r.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(i.a)(h))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "k", (function() {
				return b
			}));
			var r, s = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function d(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function c(e, t, n) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const m = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				}),
				h = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function b(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(s);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/parseUrl.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n) => Object.assign({
					gallery: a.gallery(e, t, n),
					post: a.post(e, t)
				}, a.defaults(e)),
				i = (e, t) => n => Object.assign(Object.assign({}, o(n, e, t)), {
					action: r.c.VIEW,
					noun: "media",
					source: "gallery",
					media: a.media(n, e)
				}),
				d = (e, t, n) => i => {
					const d = Object(s.a)(t);
					return Object.assign(Object.assign({}, o(i, e, n)), {
						action: r.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, a.media(i, e)), {
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						})
					})
				},
				c = (e, t) => u(e, !0, t),
				l = (e, t) => u(e, !1, t),
				u = (e, t, n) => s => Object.assign(Object.assign({}, o(s, e, n)), {
					action: r.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "s", (function() {
				return R
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "l", (function() {
				return T
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				a = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			const d = [],
				c = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = _(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const n = j(e, t);
					if (n) return n.mainHeader
				},
				p = (e, t) => {
					const n = j(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				h = (e, t) => {
					const n = j(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : c
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				x = (e, t) => {
					const n = b(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				f = (e, t) => {
					const n = b(e, t);
					return n && n.amount || "0"
				},
				g = (e, t) => {
					if (Object(o.a)(e)) {
						const t = Object(i.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const n = a.d.spPolls(e),
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return n && !e
					}
					return n
				},
				v = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				y = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || d
				},
				w = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				N = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				E = (e, t) => {
					const n = R(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				j = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				O = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				_ = (e, t) => {
					const n = O(e, t);
					return n && n.walletProvider
				},
				I = (e, t) => {
					const n = _(e, t),
						r = O(e, t);
					return n && n.provider || r && r.provider
				},
				M = (e, t) => {
					const n = I(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				R = (e, t) => {
					const n = _(e, t),
						r = I(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const a = n && n.extra && n.extra.contracts,
						o = a && a.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				k = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = _(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				T = (e, t) => {
					const n = O(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.ed960203832111f706dc.js.map