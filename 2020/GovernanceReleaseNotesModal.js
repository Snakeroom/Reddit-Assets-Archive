// https://www.redditstatic.com/desktop2x/GovernanceReleaseNotesModal.4a38b98c7e22d8e015fb.js
// Retrieved at 3/4/2020, 10:00:07 PM by Reddit Dataminer v1.0.0
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
			let s;
			const r = new Map,
				a = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!a.get(t)) {
						a.set(t, n);
						const s = r.get(t);
						if (s) {
							s(e, n && !!a.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const o = (e, t) => {
					try {
						r.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				i = e => {
					try {
						r.delete(e), s && s.unobserve(e)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				return r.a.createElement(d.a, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(i);

			function c(e) {
				return r.a.createElement("div", {
					className: Object(a.a)(d.a.container, e.className)
				}, r.a.createElement("div", {
					className: d.a.title
				}, e.children), r.a.createElement(o.a, null))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				u = n("./src/reddit/constants/keycodes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./node_modules/shallowequal/index.js"),
				v = n.n(g),
				b = n("./src/lib/classNames/index.ts"),
				h = n("./src/reddit/components/Governance/ReleaseNotesModal/ReleaseDate/index.m.less"),
				f = n.n(h);

			function w(e) {
				return [e.getDate(), e.getMonth(), e.getFullYear()]
			}

			function N(e) {
				const t = (n = new Date(Date.now() + 60 * (new Date).getTimezoneOffset() * 1e3), s = new Date(e.date), v()(w(n), w(s)));
				var n, s;
				return r.a.createElement("div", {
					className: Object(b.a)(f.a.date, e.className)
				}, t ? Object(i.a)(e.language, "time.today") : function(e) {
					const [t, , n] = w(e);
					return "".concat(e.toLocaleString("en-US", {
						month: "short"
					}), " ").concat(t, ", ").concat(n)
				}(new Date(e.date)))
			}
			var y = n("./src/reddit/components/Media/index.tsx"),
				j = n("./src/reddit/components/RichTextJson/index.tsx"),
				E = n("./src/reddit/components/Governance/ReleaseNotesModal/Slide/index.m.less"),
				_ = n.n(E);
			const O = {};

			function M(e) {
				return r.a.createElement("div", {
					className: e.className
				}, r.a.createElement("div", {
					className: _.a.title
				}, e.releaseNote.title), e.releaseNote.media && "rtjson" === e.releaseNote.media.type ? r.a.createElement("div", {
					className: _.a.text
				}, r.a.createElement(j.a, {
					content: e.releaseNote.media.richtextContent,
					language: e.language,
					mediaMetadata: e.releaseNote.media.mediaMetadata,
					rtJsonElementProps: O
				})) : r.a.createElement("div", {
					className: _.a.media
				}, r.a.createElement(y.a, {
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
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				C = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideChange/index.m.less"),
				R = n.n(C);

			function L(e) {
				return r.a.createElement("div", {
					className: Object(b.a)(R.a.container, e.className)
				}, !e.isFirst && r.a.createElement(I.i, {
					className: R.a.prev,
					onClick: e.onPrevSlide
				}, r.a.createElement(S.a, {
					className: R.a.arrow
				})), r.a.createElement(I.f, {
					onClick: e.isLast ? e.onClose : e.onNextSlide
				}, Object(i.a)(e.language, e.isLast ? "gov.releaseNotesDone" : "gov.releaseNotesNext")))
			}
			var T = n("./src/reddit/components/Governance/ReleaseNotesModal/SlideIndicator/index.m.less"),
				D = n.n(T);

			function P(e) {
				return r.a.createElement("div", {
					className: Object(b.a)(D.a.container, e.className)
				}, Array.from({
					length: e.totalSlides
				}).map((t, n) => r.a.createElement("div", {
					className: Object(b.a)(D.a.dot, {
						[D.a.dotSelected]: n === e.currentSlide
					})
				})))
			}
			var k = n("./src/reddit/components/Governance/ReleaseNotesModal/index.m.less"),
				G = n.n(k);
			class V extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentlyViewingIndex: 0
					}, this.handleViewNextSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.min(e.currentlyViewingIndex + 1, this.props.releaseNotes.length - 1)
					})), this.handleViewPrevSlide = () => this.setState(e => ({
						currentlyViewingIndex: Math.max(e.currentlyViewingIndex - 1, 0)
					})), this.handleKeyDown = e => {
						switch (e.key) {
							case u.b.ArrowRight:
								return this.handleViewNextSlide();
							case u.b.ArrowLeft:
								return this.handleViewPrevSlide();
							case u.b.Escape:
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
					return r.a.createElement("div", null, r.a.createElement(l.a, {
						className: G.a.title
					}, Object(i.a)(this.props.language, "gov.releaseNotesTitle", {
						subredditName: this.props.subreddit.displayText
					})), r.a.createElement(M, {
						language: this.props.language,
						releaseNote: e
					}), r.a.createElement("div", {
						className: G.a.controls
					}, r.a.createElement(N, {
						className: G.a.controlBox,
						date: e.created,
						language: this.props.language
					}), r.a.createElement(P, {
						className: G.a.controlBox,
						currentSlide: this.state.currentlyViewingIndex,
						totalSlides: this.props.releaseNotes.length
					}), r.a.createElement(L, {
						className: G.a.controlBox,
						isFirst: 0 === this.state.currentlyViewingIndex,
						isLast: this.state.currentlyViewingIndex === this.props.releaseNotes.length - 1,
						language: this.props.language,
						onClose: this.props.onClose,
						onNextSlide: this.handleViewNextSlide,
						onPrevSlide: this.handleViewPrevSlide
					})))
				}
			}
			const H = Object(o.c)({
					releaseNotes: p.j,
					language: x.P,
					subreddit: m.q
				}),
				A = Object(a.b)(H, e => ({
					onClose: () => e(Object(c.f)())
				})),
				B = Object(m.t)();
			t.default = Object(d.a)(B(A(V)))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
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
				x = d.a.wrapped(e => a.a.createElement("div", {
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
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(s.j)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.j)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(i.a)(x))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var s, r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case s.Ethereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, n) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function d(e, t, n) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function c(e, t, n) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(s || (s = {}))
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
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				d = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation"]),
				c = e => i.has(e.toLowerCase()) || d.has(e.toLowerCase()),
				l = e => i.has((Object(a.e)(e) || "").toLowerCase()) || d.has((Object(a.e)(e) || "").toLowerCase()) && Object(r.c)(e, {
					experimentEligibilitySelector: o.G,
					experimentName: s.Z
				}) === s.gb.Enabled
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
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "q", (function() {
				return M
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "r", (function() {
				return S
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/endpoints/governance/crypto.ts"),
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
					const s = E(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const n = y(e, t);
					if (n) return n.mainHeader
				},
				p = (e, t) => {
					const n = y(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				x = (e, t) => {
					const n = y(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : c
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				v = (e, t) => {
					if (Object(o.b)(e)) {
						const t = Object(i.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const n = a.d.spPolls(e) || a.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return n && !e
					}
					return n
				},
				b = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				h = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || d
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				w = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				N = (e, t) => {
					const n = M(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				j = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				E = (e, t) => {
					const n = j(e, t);
					return n && n.walletProvider
				},
				_ = (e, t) => {
					const n = E(e, t),
						s = j(e, t);
					return n && n.provider || s && s.provider
				},
				O = (e, t) => {
					const n = _(e, t);
					return n === r.a.Ethereum || n === r.a.Rinkeby
				},
				M = (e, t) => {
					const n = E(e, t),
						s = _(e, t);
					if (n && !n.inTransition && s === r.a.Stellar) return {
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
				I = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = E(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				S = (e, t) => {
					const n = j(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceReleaseNotesModal.4a38b98c7e22d8e015fb.js.map