// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.88e72633cf490fd73bd4.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/selectors/telemetry.ts");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
					const a = m(n.target, n.currentTarget),
						r = p(n.target, n.currentTarget);
					a && s && t && (u(n.target, n.currentTarget, c.anchors) ? s(t(e, a, r)) : s(s => {
						const i = t(e, a, r)(s);
						let n;
						if (i && i.actionInfo) {
							const {
								pageType: e,
								...t
							} = i.actionInfo;
							n = t
						}
						return {
							...i,
							actionInfo: Object(o.U)(s, n)
						}
					})), u(n.target, n.currentTarget, c.anchorsAndButtons) && i(n)
				}
			});

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: a,
						clickTrackingId: o,
						...d
					} = t, c = Object(i.useCallback)(l(o, a, s), [o, a, s]);
					return n.a.createElement(e, r({}, d, {
						afterClickTracking: c
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(a.c)(t)
			}
			const c = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				m = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/truncateText/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const i = /\s*[,-:;\u2013\u2014]\s*$/;

			function n(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				if (e.length <= t || t < 0) return e;
				if ((e = e.trim().replace(/\s+/g, " ")).length <= t) return e;
				t -= s.length;
				let n = e.lastIndexOf(" ", t);
				return n = n > 0 ? n : t, e.slice(0, n).replace(i, "").trimRight() + s
			}
		},
		"./src/reddit/components/Econ/Prediction/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("reddit-components-Econ-Prediction")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/index.tsx"
				}
			})
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.m.less": function(e, t, s) {
			e.exports = {
				optionalText: "_1Bdk-WLPvP2xHwSSQ3qsHq"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				o = s.n(a),
				r = s("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: s
				} = e;
				return n.a.createElement("div", {
					className: o.a.optionalText
				}, n.a.createElement(r.a, {
					content: t,
					rtJsonElementProps: s
				}))
			}
		},
		"./src/reddit/components/Media/GalleryBox/index.m.less": function(e, t, s) {
			e.exports = {
				outerContainer: "kcerW9lbT-se3SXd-wp2i",
				nextButton: "_38uXo2TofvhEuLKeH-rRcV",
				icon: "_32kofHIEwuARK_15MrzAuT",
				seeMore: "_3b8u2OJXaSDdBWoRB7zUoK",
				iconImage: "_3PkAZ5W4aDQ7cujQ426UiB",
				prevIcon: "CxV9u12DiN4nfOLEzaWGg",
				nextIcon: "Qfn6RihWXp6riuP88alpI",
				imageLink: "iUP9nbvcaxfwKrQTgt0sw",
				tallImage: "_1ti9kvv_PMZEF2phzAjsGW",
				commonImage: "_3BxRNDoASi9FbGX01ewiLg",
				navigationUnderlay: "_1fSFPkxZ9pToLETLQT2dmc",
				hasMoreSlides: "_3-JCOd-nY76g29C7ZVX_kl",
				slideshowContainer: "KVyBaj7FjzElWsqJDmw7v",
				slideImageMainDiv: "_35oEP5zLnhKEbj5BlkTBUA",
				slideImage: "_1dwExqTGJH2jnA-MYGkEL-",
				slide: "_28TEYBuEdOuE3kN6UyoKMa",
				imagesWrapper: "_2Ev7WJU0f45KxlmClce9t8",
				slideWrapper: "_1apobczT0TzIKMWpza0OhL",
				figure: "_3o5Vzct5tn9PE7e-emdDmf",
				imageMetaData: "_26daP6nhhW7BT-CMzL0ijs",
				imageUrl: "_1JvpVe-IA894KlEuAn5i9c",
				outboundUrlWrapper: "_2ZUcZqGYDSM0BMbiracglV",
				linkIcon: "_2pA6COv2OLOcG3Ma_ZAzLs",
				urlText: "G960looU9eqiZ1POYed8r",
				emptyCaptionBlock: "cKdLDCF6ney9RBLRzJt8j",
				imageCaption: "_15nNdGlBIgryHV04IfAfpA",
				slideIndicator: "_61i6grM3um1yuw4GrN97P",
				tilesWrapper: "bVildkms0x9XcY2qrG0Mr",
				tileImage: "_1ynfiEQPXyJqwL8az8sG71",
				blurredContent: "kYRcqD1CH-tXu0xGsAOLH",
				tilePlaceholder: "Qazqk11mIzZph1VMsNMtk",
				tileIcon: "_3VAoQueUjpnNBtHAZRjo_0"
			}
		},
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, s) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
				tweetContainer: "_2yB7G9L-6O_6Lp6D0n7EAl",
				tweetEmbedBox: "_3pYTJO5FjsoQWRUsIFQASN",
				isInvisible: "_3xICr9rbunMOudN40P1GgI",
				tweetDeleted: "sIgL7k1Lz6YLL146KNk8k",
				seeMore: "_2f5uYHvlfzs2DngQsiCdvB"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return es
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
				a = s("./node_modules/lodash/noop.js"),
				o = s.n(a),
				r = s("./node_modules/react/index.js"),
				l = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				u = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				p = s("./src/lib/cache/localStorage/index.ts"),
				h = s("./src/lib/combineRefs/index.tsx"),
				g = s("./src/lib/loadWithRetries/index.ts"),
				b = () => Object(g.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				x = s("./src/reddit/constants/experiments.ts"),
				E = s("./src/reddit/helpers/chooseVariant/index.ts");
			const f = Object(c.a)(e => {
				const t = Object(E.c)(e, {
					experimentEligibilitySelector: E.a,
					experimentName: x.Je
				});
				return Object(x.Eg)(t) ? void 0 : t
			}, e => {
				const t = Object(E.c)(e, {
					experimentEligibilitySelector: E.a,
					experimentName: x.Ke
				});
				return Object(x.Eg)(t) ? void 0 : t
			}, (e, t) => e === x.Me.Enabled && t === x.Me.Enabled);
			var v = s("./src/config.ts");
			var y = s("./src/reddit/selectors/user.ts");
			const O = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				w = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var C;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(C || (C = {}));
			const S = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(w).join("")
			})(C.SHA1, e);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const j = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				N = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: v.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${v.a.buildNumber} ${v.a.appName}`,
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			var L = function(e, t) {
					const {
						anonymousUserId: s,
						debug: i,
						disableCookies: n,
						envKey: a,
						localStorageSaltKey: o,
						localStorageViewerUserIdKey: u,
						playerName: m,
						playerVersion: g,
						respectDoNotTrack: x,
						saltLength: E,
						saltTimeToLive: w,
						viewerUserIdLength: C
					} = {
						...N,
						...t
					};
					class L extends r.Component {
						constructor(e) {
							super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(r.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
						}
						get experimentName() {
							return ""
						}
						get video() {
							return this.videoRef.current
						}
						componentDidMount() {
							this.doMuxThings()
						}
						componentDidUpdate(e) {
							this.props.sessionId !== e.sessionId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
						}
						componentWillUnmount() {
							this.handleDashDestroy(), this.handleHlsDestroy()
						}
						combineExternalVideoRef(e) {
							return e ? Object(h.a)(this.videoRef, e) : this.videoRef
						}
						render() {
							const {
								forwardedRef: t,
								...s
							} = this.props, i = s;
							return l.a.createElement(e, T({}, i, {
								onDashCreate: this.handleDashCreate,
								onDashDestroy: this.handleDashDestroy,
								onHlsCreate: this.handleHlsCreate,
								onHlsDestroy: this.handleHlsDestroy,
								ref: t,
								videoRef: this.combinedVideoRefs
							}))
						}
						async setDashInstance(e) {
							if (!this.props.isMuxEnabled) return;
							const t = e || null;
							if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
								const {
									video: e
								} = this, t = await b();
								e && t.removeDashJS(e), this.video && this.dashInstance && t.addDashJS(this.video, this.getDashInstanceData())
							} catch (s) {
								console.error(s)
							}
						}
						async setHlsInstance(e) {
							if (!this.props.isMuxEnabled) return;
							const t = e || null;
							if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
								const {
									video: e
								} = this, t = await b();
								e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
							} catch (s) {
								console.error(s)
							}
						}
						async doMuxThings() {
							if (this.props.isMuxEnabled) try {
								const e = await b();
								if (this.isMonitoring) {
									if (this.video) {
										const t = this.getVideoData();
										e.emit(this.video, "videochange", t)
									}
								} else {
									const t = await this.getMuxData();
									this.video && (e.monitor(this.video, t), this.isMonitoring = !0)
								}
							} catch (e) {
								console.error(e)
							}
						}
						async encryptViewerUserId() {
							const e = this.props.redditUserId || L.ANONYMOUS_USER_ID,
								t = this.getOrCreateSalt(),
								s = `${I()}${e}${t}`;
							return (await S(s)).substr(0, L.VIEWER_USER_ID_LENGTH)
						}
						getDashInstanceData() {
							const {
								dashInstance: e
							} = this;
							return e ? {
								dashjs: e
							} : null
						}
						getHlsInstanceData() {
							const {
								hlsInstance: e
							} = this;
							return e ? {
								hlsjs: e,
								Hls: e.constructor
							} : null
						}
						async getMuxData() {
							const e = await this.encryptViewerUserId(),
								t = this.getVideoData(),
								s = this.getThirdPartyLibData();
							return {
								debug: L.DEBUG,
								disableCookies: L.DISABLE_COOKIES,
								respectDoNotTrack: L.RESPECT_DO_NOT_TRACK,
								...s,
								data: {
									env_key: L.ENV_KEY,
									experiment_name: this.experimentName,
									player_init_time: this.playerInitTime,
									player_name: L.PLAYER_NAME,
									player_version: L.PLAYER_VERSION,
									...t,
									viewer_user_id: e
								}
							}
						}
						getOrCreateSalt() {
							const e = L.LOCAL_STORAGE_SALT_KEY;
							let t = Object(p.a)(e);
							return t || (t = O(L.SALT_LENGTH), Object(p.b)(e, t, L.SALT_TIME_TO_LIVE)), t
						}
						getThirdPartyLibData() {
							return {
								...this.getDashInstanceData(),
								...this.getHlsInstanceData()
							}
						}
						getVideoData() {
							const {
								muxVideoDuration: e,
								muxVideoId: t,
								muxVideoIsLive: s,
								muxVideoTitle: i
							} = this.props;
							return {
								video_duration: s ? L.DURATION_LIVE : e,
								video_id: t,
								video_stream_type: s ? L.STREAM_TYPE_LIVE : L.STREAM_TYPE_ON_DEMAND,
								video_title: i,
								view_session_id: this.props.sessionId,
								player_software_version: this.getDashInstanceData() ? v.a.dashVersion : this.getHlsInstanceData() ? v.a.hlsVersion : null
							}
						}
					}
					L.displayName = j(e), L.ANONYMOUS_USER_ID = s, L.DEBUG = i, L.DISABLE_COOKIES = n, L.DURATION_LIVE = 1 / 0, L.ENV_KEY = a, L.LOCAL_STORAGE_SALT_KEY = o, L.LOCAL_STORAGE_VIEWER_USER_ID_KEY = u, L.PLAYER_NAME = m, L.PLAYER_VERSION = g, L.RESPECT_DO_NOT_TRACK = x, L.SALT_LENGTH = E, L.SALT_TIME_TO_LIVE = w, L.STREAM_TYPE_LIVE = "live", L.STREAM_TYPE_ON_DEMAND = "on-demand", L.VIEWER_USER_ID_LENGTH = C;
					const M = Object(r.forwardRef)((e, t) => l.a.createElement(L, T({}, e, {
							forwardedRef: t
						}))),
						P = Object(c.c)({
							redditUserId: y.k,
							isMuxEnabled: f
						});
					return Object(d.b)(P, null, null, {
						forwardRef: !0
					})(M)
				},
				M = s("./src/lib/ads/index.ts"),
				P = s("./src/lib/ads/utils.ts"),
				k = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/constants/index.ts"),
				D = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				A = s("./src/lib/env/index.ts"),
				R = s("./src/lib/isUrl/index.ts"),
				B = s("./src/lib/objectSelector/index.ts"),
				V = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				W = s("./src/lib/sentry/index.ts"),
				U = s("./src/lib/truncateText/index.ts"),
				H = s("./src/reddit/actions/post.ts"),
				F = s("./src/reddit/components/AdViewability/index.tsx"),
				G = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				z = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				J = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx");
			const K = "https://www.redditmedia.com";
			var Y = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				$ = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				q = s("./src/lib/hooks/usePrevious.ts"),
				Q = s("./src/reddit/helpers/trackers/gallery.ts");
			var X = (e, t, s) => {
					const i = Object(r.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(r.useEffect)(() => {
						if (t) return t.addEventListener("keydown", i), () => {
							t && t.removeEventListener("keydown", i)
						}
					}, [t, i])
				},
				Z = s("./src/reddit/hooks/useTracking.ts"),
				ee = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				te = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				se = s("./src/reddit/icons/svgs/Tile/index.tsx"),
				ie = s("./src/reddit/actions/media.ts"),
				ne = s("./src/reddit/components/Media/BlurredContent.tsx"),
				ae = s("./src/reddit/constants/adEvents.ts"),
				oe = s("./src/reddit/constants/keycodes.ts"),
				re = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				le = s.n(re),
				de = s("./src/reddit/models/Media/index.ts");

			function ce(e, t) {
				const s = t.sort((e, t) => e.y - t.y),
					i = s.find(t => t.y > e);
				if (i) return i;
				const n = s.pop();
				return n || null
			}
			const ue = e => e ? de.j : de.d;

			function me(e, t, s, i) {
				const n = pe(e);
				if (be(n, t)) return t;
				const a = he(n);
				let o = a.y;
				return !o || o < s ? s : (i > 0 && (o = i * o / a.x), o > t ? t : o)
			}
			const pe = e => Object.entries(e).reduce((e, t) => {
					let [s, i] = t;
					return i && i.s && e.push(i.s), e
				}, []),
				he = e => e.reduce((e, t) => ge(e, t), e && e[0] || []),
				ge = (e, t) => {
					const s = e.x / e.y + .005,
						i = e.x / e.y - .005;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				},
				be = (e, t) => e.some(e => e.y > t && Object(de.N)(e.y, e.x));
			var xe = s("./src/reddit/selectors/media.ts"),
				Ee = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				fe = s.n(Ee);
			const {
				fbt: ve
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = e => {
				const {
					displayImage: t,
					style: s,
					showSeeMore: i,
					isReadyToShow: n,
					imgAltText: a
				} = e, o = "u" in t ? t.u : t.gif;
				return l.a.createElement("div", {
					className: Object(k.a)({
						[fe.a.slideImageMainDiv]: !i
					})
				}, n && l.a.createElement("img", {
					src: o,
					alt: a,
					className: fe.a.slideImage,
					style: s
				}), i && l.a.createElement("div", {
					className: fe.a.seeMore
				}, ve._("see full image", null, {
					hk: "1Qygw5"
				})))
			}, Oe = (e, t, s) => {
				const i = pe(e),
					n = he(i),
					a = n.x / n.y < 1,
					o = function(e) {
						const t = pe(e),
							s = t.every(e => e.y > e.x),
							i = t.every(e => e.x > e.y);
						return !s && !i
					}(e),
					r = function(e, t, s) {
						const i = pe(e);
						if (be(i, t)) return !0;
						const n = he(i).y;
						return !n || n < s
					}(e || {}, ue(s), de.p);
				return s || r || o || a ? {
					height: t
				} : {
					paddingBottom: `${Object(de.C)(n.y,n.x)}%`
				}
			}, Ie = e => {
				const {
					slideIndex: t,
					currentIndex: s,
					obfuscatedImage: i,
					optimalImage: n,
					originalImage: a,
					imgAltText: o,
					isListing: r,
					isNSFW: d,
					isNsfwBlockingModalEligible: c,
					isSpoiler: u,
					isSponsored: m,
					isReadyToShow: p,
					shouldBlur: h
				} = e, g = s === t ? {
					left: "0px"
				} : {
					left: s > t ? "-100%" : "100%"
				}, b = ue(r), x = a.y > b && Object(de.N)(a.y, a.x), E = x ? {} : {
					maxHeight: "100%"
				};
				let f;
				return f = i || (x ? a : "gif" in a ? a : n), l.a.createElement("li", {
					style: g,
					className: fe.a.slide
				}, l.a.createElement("figure", {
					className: Object(k.a)({
						[fe.a.tallImage]: x,
						[fe.a.commonImage]: !x
					}, fe.a.figure)
				}, r || m ? l.a.createElement(ye, {
					displayImage: f,
					style: E,
					showSeeMore: x,
					isReadyToShow: p,
					imgAltText: o
				}) : l.a.createElement("a", {
					href: "u" in a ? a.u : a.gif,
					rel: "noopener noreferrer",
					target: "_blank",
					className: Object(k.a)({
						[fe.a.tallImage]: x,
						[fe.a.commonImage]: !x
					}, fe.a.imageLink)
				}, l.a.createElement(ye, {
					displayImage: f,
					style: E,
					showSeeMore: x,
					isReadyToShow: p,
					imgAltText: o
				}), h && !c && l.a.createElement(ne.a, {
					isNSFW: !!d,
					isSpoiler: !!u
				}))))
			}, we = e => l.a.createElement("a", {
				className: Object(k.a)(e.className, fe.a.navigationUnderlay, {
					[fe.a.hasMoreSlides]: e.hasMoreSlides
				}),
				onClick: t => {
					e.onClick(), t.stopPropagation()
				},
				onMouseDown: t => {
					e.setFocusTo.current && e.setFocusTo.current.focus({
						preventScroll: !0
					}), t.preventDefault()
				},
				title: e.hasMoreSlides ? e.title : void 0
			}, e.hasMoreSlides && l.a.createElement("i", {
				className: Object(k.a)(e.iconClassName, fe.a.icon)
			}, l.a.createElement(ee.a, {
				className: fe.a.iconImage
			}))), Ce = e => l.a.createElement("div", {
				className: fe.a.imageMetaData,
				style: {
					height: e.captionHeight,
					justifyContent: e.caption ? "space-between" : "flex-end"
				}
			}, e.caption && l.a.createElement("span", {
				className: fe.a.imageCaption,
				title: e.caption
			}, e.caption), e.outboundUrl && l.a.createElement("span", {
				className: fe.a.imageUrl
			}, l.a.createElement("a", {
				className: fe.a.outboundUrlWrapper,
				href: e.outboundUrl,
				onClick: e.onClickEvent,
				rel: "noopener noreferrer",
				target: "'_blank'"
			}, l.a.createElement("span", {
				className: fe.a.urlText
			}, (e => {
				const t = le.a.parse(e),
					s = t.path || "",
					i = s.length > 7 ? s.substring(0, 7) + "..." : s;
				return (t.hostname ? t.hostname.replace("www.", "") : "") + i.substring(i.lastIndexOf("/") + 1)
			})(e.outboundUrl)), l.a.createElement(te.a, {
				className: fe.a.linkIcon
			})))), Se = e => l.a.createElement("div", {
				className: fe.a.slideIndicator,
				onClick: e.toggleTileLayout ? t => {
					t.preventDefault(), t.stopPropagation(), e.toggleTileLayout()
				} : void 0
			}, e.toggleTileLayout && l.a.createElement(se.a, {
				className: fe.a.tileIcon
			}), e.currentSlide, "/", e.totalSlides), Te = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					s = e - t;
				return s < 0 && (s = 0), s
			}, je = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
					i = e + s;
				return i > t - 1 && (i = t - 1), i
			};
			var Ne = e => {
					const t = Object(d.d)(),
						{
							captionHeight: s,
							galleryItems: i,
							imageHeight: n,
							isListing: a,
							isSponsored: o,
							isTileLayout: c,
							mediaMetadata: m = {},
							post: p,
							postId: h,
							postTitle: g,
							shouldShowTileLayoutOption: b,
							showPromotedCTA: x,
							subredditName: E,
							isVisible: f
						} = e,
						v = Object(d.e)(e => Object(xe.d)(e, h)),
						y = v > 0,
						O = v < i.length - 1,
						I = Object(Z.a)(),
						w = Object(r.useRef)(null),
						C = Object(r.useRef)(null),
						[S, T] = Object(r.useState)(f ? v : -1),
						[j, N] = Object(r.useState)(f ? v : -1),
						L = Object(q.a)(f),
						M = Object(q.a)(v);
					Object(r.useEffect)(() => {
						(void 0 !== L && L !== f && f && S < 0 && j < 0 || void 0 !== M && M !== v && f && (S > v || j < v)) && (T(Te(v, 1)), N(je(v, i.length, 1)))
					}, [L, v, f, S, j, M, i.length, h]);
					const P = Object(r.useRef)(),
						D = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								t ? (S < 0 || j - S == 0) && (P.current = setTimeout(() => {
									const e = je(j, i.length);
									e !== j && N(e)
								}, 1e3)) : (S < 0 || j - S == 0) && clearTimeout(P.current)
							})
						}, [S, j, i.length]);
					Object($.a)(C, D);
					const A = Object(r.useCallback)(e => {
							t(Object(ie.f)({
								postId: h,
								index: e
							}))
						}, [t, h]),
						R = Object(r.useCallback)(e => {
							t(Object(H.y)(p, ae.a.GalleryItemImpression, `Slide${e}`))
						}, [t, p]),
						B = Object(r.useCallback)(() => {
							t(Object(ie.i)({
								postId: h,
								isTileLayout: !c
							}))
						}, [t, h, c]),
						V = Object(r.useCallback)(() => {
							if (!O) return;
							const e = v + 1;
							if (e + 1 >= j) {
								const e = je(j, i.length);
								e !== j && N(e)
							}
							A(e), I(Q.b(h, e)), I(Q.d(h, e + 1)), R(e)
						}, [O, v, R, A, I, h, j, i.length]),
						W = Object(r.useCallback)(() => {
							if (!y) return;
							const e = v - 1;
							if (e - 1 <= S) {
								const e = Te(S);
								e !== S && T(e)
							}
							const t = v + 1;
							A(e), I(Q.a(h, t)), I(Q.d(h, t - 1)), R(e)
						}, [y, v, R, A, I, h, S]),
						F = Object(r.useCallback)(() => {
							const e = i[v] && i[v].outboundUrl;
							e && I(Q.c(h, e))
						}, [I, h, v, i]);
					X(oe.a.ArrowLeft, w.current, W), X(oe.a.ArrowRight, w.current, V);
					const G = i[v] && i[v].caption,
						z = i[v] && i[v].outboundUrl,
						J = Oe(m, n, a);
					return l.a.createElement("div", {
						"data-adclicklocation": u.a.MEDIA,
						className: Object(k.a)(fe.a.outerContainer),
						ref: w,
						tabIndex: 0
					}, c ? l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(k.a)(fe.a.tilesWrapper, {
							[fe.a.blurredContent]: e.shouldBlur
						}),
						onClick: e.onClickRevealBlurred
					}, i.map((t, s) => {
						const i = t.mediaId,
							n = m && m[i];
						if (!n || !n.s) return null;
						const a = [...n && n.s ? [n.s] : [], ...n && n.p ? n.p : []],
							o = ce(de.z, a);
						if (!o) return null;
						const r = n.s;
						return l.a.createElement("div", {
							style: {
								backgroundImage: `url(${"gif"in r?r.gif:"u"in o&&o.u})`
							},
							className: fe.a.tileImage,
							onClick: e.shouldBlur ? void 0 : e => {
								e.preventDefault(), e.stopPropagation(), B(), A(s)
							},
							key: i
						})
					}), [1, 2, 3].map(e => l.a.createElement("div", {
						key: e,
						className: fe.a.tilePlaceholder
					}))), e.shouldBlur && !e.isNsfwBlockingModalEligible && l.a.createElement(ne.a, {
						isNSFW: !!e.isNSFW,
						isSpoiler: !!e.isSpoiler
					})) : l.a.createElement("div", {
						className: fe.a.slideshowContainer,
						tabIndex: -1,
						ref: C,
						onClick: e.onClickRevealBlurred,
						style: J
					}, l.a.createElement("div", {
						className: fe.a.imagesWrapper
					}, l.a.createElement("ul", {
						className: fe.a.slideWrapper
					}, i.map((t, s) => {
						const i = t.mediaId,
							a = m && m[i];
						if (!a || !a.s) return null;
						const r = t.caption ? t.caption : g,
							d = Object(U.a)(E ? `${E} - ${r}` : r, 300, _.mb),
							c = [...a && a.s ? [a.s] : [], ...a && a.p ? a.p : []],
							u = ce(n, c);
						if (!u) return null;
						const p = e.shouldBlur && ce(n, a.o || []) || void 0,
							h = s >= S && s <= j;
						return l.a.createElement(Ie, {
							slideIndex: s,
							currentIndex: v,
							obfuscatedImage: p,
							optimalImage: u,
							originalImage: a.s,
							isListing: e.isListing,
							isSponsored: o,
							key: i,
							isReadyToShow: h,
							imgAltText: d,
							shouldBlur: e.shouldBlur,
							isNSFW: e.isNSFW,
							isNsfwBlockingModalEligible: e.isNsfwBlockingModalEligible,
							isSpoiler: e.isSpoiler
						})
					})), !e.shouldBlur && l.a.createElement(l.a.Fragment, null, l.a.createElement(we, {
						onClick: W,
						setFocusTo: C,
						hasMoreSlides: y,
						title: ve._("Previous", null, {
							hk: "3dZcTi"
						}),
						iconClassName: fe.a.prevIcon,
						className: fe.a.prevButton
					}), l.a.createElement(we, {
						onClick: V,
						setFocusTo: C,
						hasMoreSlides: O,
						title: ve._("Next", null, {
							hk: "3Ajk1H"
						}),
						iconClassName: fe.a.nextIcon,
						className: fe.a.nextButton
					}))), i.length > 1 ? l.a.createElement(Se, {
						currentSlide: v + 1,
						totalSlides: i.length,
						toggleTileLayout: b && B || void 0
					}) : ""), !G && !z || c || x ? !!s && !c && !x && l.a.createElement("div", {
						className: fe.a.emptyCaptionBlock,
						style: {
							height: s
						}
					}) : l.a.createElement(Ce, {
						caption: G,
						onClickEvent: F,
						outboundUrl: z,
						captionHeight: s
					}))
				},
				Le = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				Me = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				Pe = s("./src/reddit/models/Prediction/index.ts"),
				ke = s("./src/reddit/selectors/poll/index.ts"),
				_e = s("./src/reddit/components/Econ/Prediction/async.ts"),
				De = s("./src/reddit/components/Poll/async.ts");
			const Ae = Object(c.c)({
				poll: ke.e
			});
			var Re = Object(d.b)(Ae)(e => {
					let {
						isCommentsPage: t,
						poll: s,
						postId: i
					} = e;
					return s ? Object(Pe.c)(s) ? l.a.createElement(_e.a, {
						postId: i
					}) : l.a.createElement(De.a, {
						postId: i,
						isCommentsPage: t
					}) : null
				}),
				Be = s("./src/reddit/constants/componentSizes.ts"),
				Ve = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				We = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				Ue = s.n(We);
			class He extends l.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(Ve.a)({
						isLoading: !0
					});
					return l.a.createElement("div", {
						className: Ue.a.placeholder
					}, [1, 2, 3].map(t => l.a.createElement("div", {
						key: t,
						className: Ue.a.placeholderParagraph
					}, l.a.createElement("div", {
						className: e
					}), l.a.createElement("div", {
						className: e
					}), l.a.createElement("div", {
						className: e
					}))))
				}
			}
			var Fe = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(H.x)(t))
			}))(He);

			function Ge() {
				return (Ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var ze = e => {
					let {
						canLoadContent: t,
						children: s,
						className: i,
						isCommentsPage: n,
						isMediumHeight: a,
						isRichTextTruncated: o,
						isExpando: r,
						isTitleOnly: d,
						postId: c,
						showFull: u,
						...m
					} = e;
					const p = {
							[Ue.a.richTextContainerFull]: u,
							[Ue.a.richTextContainerTitleOnly]: d && !u,
							[Ue.a.richTextContainer]: !u && !d
						},
						h = {};
					u || (h.maxHeight = d ? `${de.m}px` : a ? `${de.l}px` : `${de.k}px`), n && (h.maxWidth = `${Be.d}px`);
					const g = o && u;
					return l.a.createElement("div", Ge({
						className: Object(k.a)(p, i),
						style: h
					}, m), s, g && l.a.createElement(Fe, {
						canLoadContent: !!t,
						isExpando: r,
						postId: c
					}))
				},
				Je = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ke = s("./src/lib/intersectionObserver/index.ts"),
				Ye = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				$e = s.n(Ye);

			function qe() {
				return (qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Qe = 550,
				Xe = 100,
				Ze = 300;

			function et(e) {
				const {
					canLoadContent: t,
					mediaContainerProps: s,
					onIframeLoaded: i,
					embedBoxChildRef: n,
					source: a,
					title: o,
					postId: c
				} = e, [u, m] = Object(r.useState)(!1), p = Object(q.a)(t), h = Object(r.useRef)(), {
					height: g,
					isDeleted: b
				} = Object(d.e)(e => e.mediaEmbed[c] || {}), x = u ? b ? Xe : g : Ze, E = s.isListing ? Math.min(x, de.j) : x;

				function f(e) {
					var t;
					u || (null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.contentWindow) !== e.source || "tweet-measured" !== e.data.action || m(!0)
				}
				return Object(r.useEffect)(() => (window.addEventListener("message", f), () => {
					h.current && Object(Ke.b)(h.current), window.removeEventListener("message", f)
				}), []), Object(r.useEffect)(() => {
					!t && p && m(!1)
				}, [p, t]), l.a.createElement(Me.a, qe({}, s, {
					alwaysWrapMedia: !0,
					height: E + 8,
					showFull: !s.isListing,
					width: Qe
				}), t && l.a.createElement("div", {
					className: $e.a.tweetContainer,
					style: {
						height: E
					}
				}, !u && l.a.createElement("div", {
					className: Object(k.a)(Object(Ve.a)({
						isLoading: !0
					}), $e.a.tweetPlaceholder)
				}), u && b && l.a.createElement("p", {
					className: $e.a.tweetDeleted
				}, Je.fbt._("This Tweet has been deleted.", null, {
					hk: "1LhcOw"
				})), l.a.createElement(Y.a, {
					childRef: function(e) {
						h.current = e, e && Object(Ke.a)(e, (t, s) => {
							e && e.contentWindow && !g && s && (m(!1), e.contentWindow.postMessage("twitter-measure-requested", K))
						}), n(e)
					},
					className: Object(k.a)($e.a.tweetEmbedBox, {
						[$e.a.isInvisible]: !u || b
					}),
					fullWidth: !0,
					height: E,
					isListing: s.isListing,
					isResponsive: !0,
					isTweet: !0,
					maxHeight: s.isListing ? de.j : null,
					onLoad: i,
					showCentered: s.showCentered,
					showFull: !0,
					source: a,
					title: o
				}), s.isListing && x > de.j && l.a.createElement("div", {
					className: $e.a.seeMore
				}, Je.fbt._("See full tweet", null, {
					hk: "1bxtrd"
				}))))
			}
			var tt = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				st = s("./src/reddit/components/PlayButton/index.tsx"),
				it = s("./src/reddit/components/PostList/index.tsx"),
				nt = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				at = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				ot = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function rt() {
				return (rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var lt = Object(D.a)(e => {
					let {
						flairStyleTemplate: t,
						...s
					} = e;
					return l.a.createElement(ot.a, rt({
						style: {
							color: Object(at.a)(Object(nt.a)({
								flairStyleTemplate: t,
								...s
							}))
						}
					}, s))
				}),
				dt = s("./src/reddit/components/RichTextJson/index.tsx"),
				ct = s("./src/reddit/constants/screenWidths.ts"),
				ut = s("./src/reddit/contexts/PageLayer/index.tsx"),
				mt = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				pt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				ht = s("./src/reddit/helpers/path/index.ts"),
				gt = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				bt = s("./src/lib/redditId/index.ts");

			function xt(e, t, s) {
				return e.replace(`href="https://www.reddit.com/poll/${Object(bt.c)(t)}`, `class="${s}" href="https://www.reddit.com/poll/${Object(bt.c)(t)}`)
			}

			function Et(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let n = [];
					try {
						for (const a of t)
							if ("link" === a.e && a.u && a.u.includes(`https://www.reddit.com/poll/${s}`)) i = !0;
							else if (a.c && "string" != typeof a.c) {
							const t = e(a.c, s);
							t.found ? (i = !0, ("par" !== a.e || t.updated.length) && n.push({
								...a,
								c: t.updated
							})) : n.push(a)
						} else n.push(a)
					} catch (a) {
						i = !1, n = []
					}
					return {
						found: i,
						updated: i ? n : t
					}
				}(e.document, Object(bt.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
			var ft = s("./src/reddit/selectors/experiments/d2xShredditPlayer.ts"),
				vt = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				yt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ot = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				It = s("./src/reddit/selectors/experiments/postSeo.ts"),
				wt = s("./src/reddit/selectors/meta.ts"),
				Ct = s("./src/reddit/selectors/postCreations.ts"),
				St = s("./src/reddit/selectors/posts.ts"),
				Tt = s("./src/reddit/selectors/seo/index.ts"),
				jt = s("./src/reddit/selectors/telemetry.ts");
			const Nt = (e, t, s, i) => {
					const n = e / t,
						a = s / i;
					return Math.abs(n - a) < .03
				},
				Lt = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				Mt = (e, t, s) => {
					for (let i = 0; i < s.length; i++) {
						const n = s[i];
						if (n.width >= de.d / 2 && Nt(e, t, n.height, n.width)) return n
					}
				},
				Pt = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= de.d || s.width >= de.e) return s
					}
				};
			var kt = s("./src/reddit/components/Media/ShredditPlayerWrapper/index.tsx"),
				_t = s("./src/reddit/components/Media/index.m.less"),
				Dt = s.n(_t);

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Rt = L(z.b, {
					playerName: "Reddit Player"
				}),
				Bt = 300,
				Vt = " - ",
				Wt = 1200,
				Ut = 75,
				Ht = "player.js",
				Ft = Be.q + Be.p,
				Gt = e => l.a.createElement("div", {
					className: Object(k.a)(Dt.a.visibilityWrapper, {
						[Dt.a.displayNone]: !e.isVisible
					})
				}, e.children),
				zt = new Set([de.o.EMBED, de.o.VIDEO, de.o.GIFVIDEO]),
				Jt = e => !!e.media && zt.has(e.media.type),
				Kt = new Set([de.o.EMBED, de.o.GALLERY, de.o.GIFVIDEO, de.o.IMAGE, de.o.VIDEO]),
				Yt = e => {
					let {
						post: t
					} = e;
					return !!t.media && Kt.has(t.media.type)
				},
				$t = Object(ut.v)(),
				qt = Object(c.c)({
					canUseOCRAltText: (e, t) => Object(It.b)(e, t.post),
					OCRAltText: (e, t) => {
						let {
							post: s
						} = t;
						return Object(It.a)(e, s.id)
					},
					subredditOrProfileDisplayText: (e, t) => Object(It.i)(e, t),
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(St.U)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(Ct.M)(e, {
							postId: s.id
						})
					},
					shouldShowAltText: (e, t) => Object(Tt.d)(e, t),
					isGalleryTileLayout: (e, t) => {
						let {
							shouldShowGalleryTileOption: s,
							post: i,
							isGalleryTileLayoutDefault: n
						} = t;
						if (!s) return !1;
						const a = Object(xe.e)(e, i.id);
						return !(void 0 !== a || !n) || !!a
					},
					pageType: e => Object(jt.d)(e).pageType,
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(St.b)(e, s.id)
					},
					isBlockingInterstitialEnabled: yt.b,
					isBlockingInterstitialV2Enabled: yt.c,
					currentUserId: y.Fb,
					nightmode: y.fb,
					shouldUseShredditPlayer: (e, t) => {
						let {
							pageLayer: s,
							post: i
						} = t;
						return Object(ft.a)(e, s, i)
					},
					shouldUseInitializationOptimization: e => Object(ft.b)(e),
					isNSFW: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(xe.b)(e, s.isNSFW, Boolean(i && i.isNSFW))
					},
					isSpoiler: (e, t) => {
						let {
							post: s,
							crosspost: i
						} = t;
						return Object(xe.c)(e, s.isSpoiler, Boolean(i && i.isSpoiler))
					},
					isBot: wt.d,
					isNsfwBlurSubreddit: Ot.e,
					isOptionalTextExpEnabled: vt.a
				}),
				Qt = Object(d.b)(qt, e => ({
					fireAdPixelsOfType: (t, s) => e(Object(H.y)(t, s)),
					openPost: t => e(Object(H.K)(t)),
					openPostLink: t => e(Object(H.Z)(Object(ht.b)(t.permalink), t.id))
				})),
				Xt = Object(B.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Zt extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && de.c.has(e.type)) {
							if (this.pauseContent(), this.iframe) {
								const t = e.type === de.o.EMBED ? e.provider : null;
								this.pauseEmbed(this.iframe, t)
							}
							this.setState(e => e.shouldStop ? null : {
								shouldStop: !0
							})
						}
					}, this.handleVisibilityChange = e => {
						const {
							shouldPause: t
						} = this.state, {
							autoplayPref: s
						} = this.props;
						this.iframe && (t || !s && e.documentInFocus || this.toggleEmbedAutoplay(this.iframe, !e.documentInFocus)), this.setState({
							isBackgrounded: !e.documentInFocus
						})
					}, this.focusContent = () => {
						this.shouldFocusContentDebouncer(!0)
					}, this.loadContent = () => {
						this.setState(e => e.canLoadContent ? null : {
							canLoadContent: !0
						})
					}, this.unmountContent = () => {
						this.stopContent(), this.iframe && this.setState(e => {
							let {
								canLoadContent: t
							} = e;
							return t ? {
								canLoadContent: !1
							} : null
						})
					}, this.contentIsHeavyToMount = () => {
						const {
							media: e
						} = this.props.post;
						return !!e && de.c.has(e.type)
					}, this.shouldFocusContentDebouncer = n()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && de.c.has(t.type)) {
							if (this.iframe) {
								const i = t.type === de.o.EMBED ? t.provider : null;
								i && !de.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
							}
							e ? this.setState(e => e.shouldPause || !e.canLoadContent ? {
								canLoadContent: !0,
								shouldPause: !1,
								shouldStop: !1
							} : null) : this.setState(e => e.shouldPause ? null : {
								shouldPause: !0
							})
						}
					}, 250, {
						leading: !0
					}), this.toggleEmbedAutoplay = (e, t) => {
						if (e.contentWindow) {
							const s = t ? de.f.Pause : de.f.Play;
							e.contentWindow.postMessage({
								context: Ht,
								method: s
							}, K), e.contentWindow.postMessage({
								context: Ht,
								method: de.f.Mute
							}, K)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === de.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: de.B.Pause
						}), K) : e.contentWindow.postMessage({
							context: Ht,
							method: de.f.Pause
						}, K))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === de.o.EMBED ? e.provider : null;
						if (this.iframe && s && !de.s.has(s)) {
							const {
								shouldPause: e
							} = this.state;
							(t || e) && this.toggleEmbedAutoplay(this.iframe, e)
						}
					}, this.onClickRevealBlurred = e => {
						this.props.isListing && !this.props.isGalleryTileLayout || !this.shouldBlur() || this.state.isRevealed || (this.setState({
							isRevealed: !0
						}), e.preventDefault(), e.stopPropagation())
					}, this.storeChildRef = e => {
						this.iframe = e
					}, this.updateDimensions = () => {
						this.setState({
							viewportHeight: window.innerHeight,
							viewportWidth: window.innerWidth
						})
					}, this.handlePostMediaClick = e => {
						(this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && (e.preventDefault(), this.props.openPostLink(this.props.post))
					}, this.state = {
						canLoadContent: e.shouldLoad || !1,
						isBackgrounded: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: de.d,
						viewportWidth: de.e
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					Jt(this.props.post) && (this.visibilityChangeSubscriptionId = V.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && Yt(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && V.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && Yt(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getAltText() {
					const {
						canUseOCRAltText: e,
						OCRAltText: t,
						post: s,
						subredditOrProfileDisplayText: i,
						shouldShowAltText: n
					} = this.props;
					if (!n) return;
					let a = "";
					return i && (a += i), t && e ? a += `${Vt}${t}` : s.title && (a += `${Vt}${s.title}`), a.length > Bt ? Object(U.a)(a, Bt, _.mb) : a
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(de.j, this.state.viewportHeight),
						s = Math.min(Wt, 16 * t / 9);
					s === Wt && (t = 9 * Wt / 16), e = this.state.viewportWidth >= ct.c ? this.state.viewportWidth < Be.k ? this.state.viewportWidth - Ft - 2 * Ut : this.state.viewportWidth - Ft - Be.e - 2 * Ut : this.state.viewportWidth - 2 * Ut;
					const i = this.state.viewportHeight - 2 * Ut;
					if (s > e) {
						t *= e / s, s = e
					} else if (t > i) {
						const e = i / t;
						t = i, s *= e
					}
					return {
						maxVideoHeight: t,
						maxVideoWidth: s
					}
				}
				getVideoMaxDimensions(e, t) {
					let s = de.j,
						i = de.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = de.t, i = de.u), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
						s = arguments.length > 2 ? arguments[2] : void 0,
						i = arguments.length > 3 ? arguments[3] : void 0;
					const {
						availableWidth: n,
						isListing: a,
						post: o
					} = e, r = o.media && o.media.obfuscated || "";
					let l = !o.media || Object(de.P)(o.media) || Object(de.J)(o.media) || Object(de.H)(o.media) ? "" : o.media.content,
						[d, c] = !o.media || Object(de.M)(o.media) || Object(de.O)(o.media) || Object(de.H)(o.media) ? [0, 0] : [o.media.height, o.media.width];
					if (n && o.media && Object(de.H)(o.media)) {
						d = me(o.media.mediaMetadata || {}, ue(a), de.p, n) + de.i, c = n
					}
					if (n && o.media && (o.media.type === de.o.IMAGE || o.media.type === de.o.GIFVIDEO)) {
						const e = Lt(n, o.media.resolutions);
						e && (l = e.url, c = e.width, d = e.height)
					} else if (o && o.media && (!e.isListing || e.isExpando) && (o.media.type === de.o.IMAGE || o.media.type === de.o.GIFVIDEO)) {
						let e;
						(e = Object(de.N)(o.media.height, o.media.width) && Object(Le.b)(o.media.height) ? Mt(o.media.height, o.media.width, o.media.resolutions) : Pt(o.media.resolutions)) && (l = e.url, c = e.width, d = e.height)
					}
					if (e.isExpando)
						if (c > t.viewportWidth) {
							d *= t.viewportWidth / c, c = t.viewportWidth
						} else if (d > t.viewportHeight) {
						const e = t.viewportHeight / d;
						d = t.viewportHeight, c *= e
					}
					const {
						maxVideoHeight: u,
						maxVideoWidth: m
					} = this.getVideoMaxDimensions(e, t);
					if (o.media && o.media.type === de.o.VIDEO) {
						const t = d / c;
						e.isExpando ? (d = u, c = m) : t > de.b ? (d = u, c = Math.min(Math.max(u / t, de.r), m)) : (d = Math.min(Math.max(m * t, de.q), u), c = m)
					}
					o.media && o.media.type === de.o.EMBED && (o.isSurveyAd && (l = Object(P.a)(s, o.impressionId, o.postId, i), d = 475, c = 475), e.isExpando && o.media.provider !== de.v.Twitter && (d = u, c = m));
					let p = !1;
					if (e.isMiniCard) {
						const e = d / c;
						p = Math.abs(e - de.b) > .01
					}
					return {
						source: l,
						obfuscated: r,
						width: c,
						height: d,
						needsBackgroundBlur: p
					}
				}
				shouldBlur() {
					const {
						isBot: e,
						isExpando: t,
						isNsfwBlurSubreddit: s,
						isNSFW: i,
						isOverlay: n,
						isSpoiler: a,
						theme: o
					} = this.props;
					if (e || t || this.state.isRevealed || n) return !1;
					const r = s && i;
					return i && !o.subredditContext.shouldShowNSFWContent || a || r
				}
				render() {
					var e, t, s;
					const {
						autoplayPref: i,
						className: n,
						crosspost: a,
						currentUserId: r,
						fireAdPixelsOfType: d,
						flairStyleTemplate: c,
						forceAspectRatio: m,
						isCommentsPage: p,
						isExpando: h,
						isGalleryTileLayout: g,
						isListing: b,
						isMediumHeight: x,
						isNotCardView: E,
						isNsfwBlurSubreddit: f,
						isNSFW: v,
						isOptionalTextExpEnabled: y,
						isSpoiler: O,
						isTitleOnly: I,
						nightmode: w,
						openPost: C,
						pageLayer: S,
						post: T,
						showCentered: j,
						showFull: N = !1,
						shouldUseInitializationOptimization: L,
						shouldUseShredditPlayer: P,
						subredditOrProfileDisplayText: k
					} = this.props, {
						canLoadContent: _,
						isBackgrounded: D,
						shouldPause: B,
						shouldStop: V,
						viewportWidth: U
					} = this.state, H = f && v;
					if (!T.media) return null;
					const z = T.isSponsored || Object(M.u)(S);
					let K;
					T.media.type !== de.o.TEXT && (K = T.media.richtextContent);
					const $ = y && K && !z,
						q = D || B,
						Q = V,
						{
							source: X,
							obfuscated: Z,
							height: ee,
							width: te,
							needsBackgroundBlur: se
						} = this.getMediaInfo(this.props, this.state, r, w),
						ie = {
							showCentered: j,
							isListing: b,
							showFull: N,
							height: ee,
							width: te,
							provider: null === (e = T.media) || void 0 === e ? void 0 : e.provider
						},
						ne = {
							...ie,
							className: n,
							forceAspectRatio: m,
							viewportWidth: U
						},
						ae = this.shouldBlur(),
						oe = !((null === (t = T.pollData) || void 0 === t ? void 0 : t.isPrediction) && !p),
						re = !(!T.isSponsored || !T.source),
						le = Object(jt.xb)() || "",
						ce = T.isSponsored ? Object(it.b)(T.id, {
							fireAdPixelsOfType: d,
							openPost: C
						}) : o.a,
						pe = e => {
							ce && ce(e, this.props.post, this.props.basePixelMetadata, void 0, this.props.pageType)
						};
					if (Z && ae) return l.a.createElement(Me.a, At({}, ne, {
						blurSrc: Z
					}), l.a.createElement(Gt, {
						isVisible: _
					}, l.a.createElement(Le.a, At({}, ie, {
						altText: this.getAltText(),
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: b,
						isNSFW: v,
						isNsfwBlockingModalEligible: H,
						isSpoiler: O,
						isVideoThumbnail: !!T.media && T.media.type === de.o.VIDEO,
						onClick: this.onClickRevealBlurred,
						postId: T.id,
						shouldBlur: ae,
						source: Z,
						outboundUrl: re && T.source.outboundUrl || void 0,
						originalSource: X,
						onPostMediaClick: this.handlePostMediaClick,
						fireAdPixelsOfType: this.props.fireAdPixelsOfType
					}))));
					if (!T.media) return null;
					switch (T.media.type) {
						case de.o.RTJSON:
							const e = Object(pt.a)(T, null);
							if (null === e) return null;
							if (!N && !Object(mt.a)(T, null === (s = this.props.theme) || void 0 === s ? void 0 : s.subredditContext)) return null;
							const t = T.isMeta ? Et(e, T.id) : e;
							return l.a.createElement(l.a.Fragment, null, oe && l.a.createElement(ze, {
								canLoadContent: _,
								className: n,
								"data-click-id": "text",
								"data-adclicklocation": u.a.MEDIA,
								isCommentsPage: p,
								isExpando: h,
								isMediumHeight: x,
								isRichTextTruncated: T.media.isRichtextPreview,
								isTitleOnly: I,
								postId: T.id,
								showFull: N
							}, l.a.createElement(dt.b, {
								altText: this.getAltText(),
								content: t,
								flairStyleTemplate: c,
								isListing: b,
								isNSFW: v,
								isNsfwBlockingModalEligible: H,
								isSpoiler: O,
								mediaMetadata: T.media.mediaMetadata,
								onClickRevealBlurred: this.onClickRevealBlurred,
								postId: T.id,
								rtJsonElementProps: Xt(this.props),
								renderMediaAsLinks: b,
								shouldBlur: ae
							}), l.a.createElement(G.b, {
								content: t
							})), l.a.createElement(Re, {
								postId: T.id,
								isCommentsPage: !!p
							}));
						case de.o.TEXT:
							if (Object(gt.a)(T)) {
								const e = "Text post should not include body content";
								return W.c.withScope(t => {
									t.setExtra("info", {
										post: T,
										isListing: b,
										isCommentsPage: p
									}), W.c.captureMessage(e)
								}), Object(A.a)() && console.log(`${T.id}: ${e}`), l.a.createElement(l.a.Fragment, null, oe && l.a.createElement(ze, {
									postId: T.id,
									className: n,
									"data-click-id": "text",
									"data-adclicklocation": u.a.MEDIA,
									isCommentsPage: p,
									showFull: N
								}, l.a.createElement(lt, {
									flairStyleTemplate: c,
									html: T.isMeta ? xt(T.media.content, T.id, Dt.a.hiddenLink) : T.media.content
								})), l.a.createElement(Re, {
									postId: T.id,
									isCommentsPage: !!p
								}))
							}
							return l.a.createElement(Re, {
								postId: T.id,
								isCommentsPage: !!p
							});
						case de.o.EMBED:
							return this.props.isMiniCard && T.preview && T.preview.url ? l.a.createElement(Me.a, At({}, ne, {
								alwaysWrapMedia: !0
							}), l.a.createElement(Gt, {
								isVisible: _
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, At({}, ie, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: v,
								isCrosspost: !!a,
								isSpoiler: O,
								postId: T.id,
								shouldBlur: ae,
								source: T.preview.url,
								originalSource: T.preview.url,
								onPostMediaClick: this.handlePostMediaClick
							})), l.a.createElement(st.a, null)))) : de.h.has(T.media.provider) ? T.media.provider === de.v.Twitter ? l.a.createElement(l.a.Fragment, null, l.a.createElement(et, {
								canLoadContent: _,
								embedBoxChildRef: this.storeChildRef,
								mediaContainerProps: ne,
								onIframeLoaded: this.onIframeLoaded,
								source: X,
								title: T.title,
								postId: T.id
							}), $ && l.a.createElement(J.a, {
								content: K,
								rtJsonElementProps: Xt(this.props)
							})) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Me.a, At({}, ne, {
								alwaysWrapMedia: !0,
								height: h ? ee : de.j,
								width: h ? te : de.j * (16 / 9)
							}), _ && l.a.createElement(Y.a, {
								childRef: this.storeChildRef,
								height: h ? ee : de.j,
								width: h ? te : void 0,
								isListing: b,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: j,
								showFull: N,
								source: X,
								title: T.title
							})), $ && l.a.createElement(J.a, {
								content: K,
								rtJsonElementProps: Xt(this.props)
							})) : l.a.createElement(l.a.Fragment, null, l.a.createElement(Me.a, At({}, ne, {
								alwaysWrapMedia: !0
							}), _ && l.a.createElement(Y.a, At({}, ie, {
								isResponsive: h || T.media.provider === de.v.IFrameEmbed,
								title: T.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: X,
								fullWidth: T.media.provider === de.v.IFrameEmbed
							}))), $ && l.a.createElement(J.a, {
								content: K,
								rtJsonElementProps: Xt(this.props)
							}));
						case de.o.GIFVIDEO: {
							let e = ee,
								t = te;
							e > de.j && (t = te / ee * (e = de.j));
							const s = P ? l.a.createElement(kt.a, {
								height: e,
								isGif: !0,
								isListing: b,
								isSponsored: T.isSponsored,
								originalSource: T.media.content,
								pageLayer: this.props.pageLayer,
								post: T,
								postId: T.id,
								posterUrl: T.media.gifBackgroundImage,
								shouldUseInitializationOptimization: L,
								source: X,
								width: t
							}) : l.a.createElement(tt.a, At({}, ie, {
								isNotCardView: E,
								height: h ? void 0 : e,
								width: h ? void 0 : t,
								postId: T.id,
								shouldLoad: !0,
								shouldPause: b && q,
								source: X,
								originalSource: T.media.content,
								isGif: !0,
								isPromoted: T.isSponsored
							}));
							return l.a.createElement(Me.a, At({}, ne, {
								height: e,
								width: t,
								blurSrc: se ? T.media.gifBackgroundImage : void 0
							}), l.a.createElement(Gt, {
								isVisible: _
							}, s, $ && l.a.createElement(J.a, {
								content: K,
								rtJsonElementProps: Xt(this.props)
							})))
						}
						case de.o.VIDEO: {
							const e = T.media.posterUrl || T.preview && T.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(l.a.Fragment, null, l.a.createElement(Me.a, At({}, ne, {
								alwaysWrapMedia: !0
							}), l.a.createElement(Gt, {
								isVisible: _
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(Le.a, At({}, ie, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: v,
								isCrosspost: !!a,
								isSpoiler: O,
								postId: T.id,
								shouldBlur: ae,
								source: e,
								originalSource: e,
								onPostMediaClick: this.handlePostMediaClick
							})), l.a.createElement(st.a, null)))), $ && l.a.createElement(J.a, {
								content: K,
								rtJsonElementProps: Xt(this.props)
							}));
							const t = T.reactedFrom && T.attributionInfo ? {
									id: T.id,
									reactedFrom: {
										...T.reactedFrom
									},
									attributionInfo: {
										...T.attributionInfo
									},
									isReactAllowed: T.isReactAllowed
								} : void 0,
								s = P ? l.a.createElement(kt.a, {
									isGif: T.media.isGif,
									isListing: b,
									isSponsored: T.isSponsored,
									packagedMedia: T.media.packagedMedia,
									pageLayer: this.props.pageLayer,
									post: T,
									postId: T.id,
									posterUrl: T.media.posterUrl,
									scrubberThumbSource: T.media.scrubberThumbSource,
									shouldUseInitializationOptimization: L,
									source: T.media.hlsUrl
								}) : l.a.createElement(Rt, {
									key: T.id,
									autoPlay: i && !1 === B,
									isExpando: h,
									shouldLoad: !0,
									shouldPause: q,
									shouldStop: Q,
									isBackgrounded: D,
									hlsSource: T.media.hlsUrl,
									mpegDashSource: T.media.dashUrl,
									isGif: T.media.isGif,
									scrubberThumbSource: T.media.scrubberThumbSource,
									postId: T.id,
									isSponsored: T.isSponsored,
									onAdPostClick: pe,
									callToActionSource: T.source || void 0,
									callToActionText: T.callToAction,
									isListing: b,
									posterUrl: T.media.posterUrl,
									muxVideoDuration: void 0,
									muxVideoId: T.id,
									muxVideoIsLive: !1,
									muxVideoTitle: T.title,
									sessionId: le,
									reactPostInfo: t,
									isCommentsPage: p
								}),
								n = l.a.createElement(Me.a, At({}, ne, {
									alwaysWrapMedia: !0,
									isVideo: !0
								}), _ ? s : null);
							return T.isSponsored ? l.a.createElement(F.a, {
								post: T,
								trackVideo: !0
							}, n) : l.a.createElement(l.a.Fragment, null, n, $ && l.a.createElement(J.a, {
								content: K,
								rtJsonElementProps: Xt(this.props)
							}))
						}
						case de.o.IMAGE:
							const o = this.state.viewportHeight - 2 * Ut,
								r = this.state.viewportWidth - 2 * Ut;
							let d = X;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (T.thumbnail && Object(R.a)(T.thumbnail.url) ? d = T.thumbnail.url : T.preview && Object(R.a)(T.preview.url) && (d = T.preview.url)), l.a.createElement(l.a.Fragment, null, l.a.createElement(Me.a, At({}, ne, {
								blurSrc: se ? d : void 0,
								isExpando: !!h
							}), l.a.createElement(Gt, {
								isVisible: _
							}, l.a.createElement(Le.a, At({}, ie, {
								altText: this.getAltText(),
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: h,
								isListing: b,
								isNSFW: v,
								isCrosspost: !!a,
								isSpoiler: O,
								maxHeight: h ? o : void 0,
								maxWidth: h ? r : void 0,
								postId: T.id,
								shouldBlur: ae,
								source: d,
								outboundUrl: re && T.source.outboundUrl || void 0,
								isSponsored: T.isSponsored,
								originalSource: T.media.content,
								onPostMediaClick: this.handlePostMediaClick,
								fireAdPixelsOfType: this.props.fireAdPixelsOfType
							})))), $ && l.a.createElement(J.a, {
								content: K,
								rtJsonElementProps: Xt(this.props)
							}));
						case de.o.GALLERY:
							const m = me(T.media.mediaMetadata || {}, ue(b), de.p, te),
								f = (he = T.media.gallery, ge = T.isSponsored, he && he.items && !ge && he.items.some(e => void 0 !== e.caption || void 0 !== e.outboundUrl) ? de.i : 0);
							return l.a.createElement(Me.a, At({}, ne, {
								blurSrc: se ? X : void 0,
								isExpando: !!h,
								maxGalleryHeight: m + f,
								className: Dt.a.galleryMediaContainer,
								isGalleryTileLayout: g
							}), l.a.createElement(Gt, {
								isVisible: _
							}, l.a.createElement(Ne, {
								post: T,
								postId: T.id,
								postTitle: T.title,
								subredditName: k,
								galleryItems: T.media.gallery ? T.media.gallery.items : [],
								mediaMetadata: T.media.mediaMetadata || {},
								imageHeight: m,
								captionHeight: f,
								isSponsored: T.isSponsored,
								showPromotedCTA: Object(M.w)(T),
								className: this.props.imageBoxClassName,
								isListing: b,
								isNSFW: v,
								isNsfwBlockingModalEligible: H,
								isSpoiler: O,
								shouldBlur: ae,
								onClickRevealBlurred: this.onClickRevealBlurred,
								isTileLayout: !!g,
								shouldShowTileLayoutOption: this.props.shouldShowGalleryTileOption,
								isVisible: _
							}), $ && l.a.createElement(J.a, {
								content: K,
								rtJsonElementProps: Xt(this.props)
							})));
						default:
							return null
					}
					var he, ge
				}
			}
			const es = $t(Qt(Object(m.a)(Object(D.a)(Zt))))
		},
		"./src/reddit/components/Poll/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Poll",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Poll").then(s.bind(null, "./src/reddit/components/Poll/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Poll/index.tsx"
				}
			})
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = (e, t) => !(!Object(i.a)(e) && !e.pollData) && (!e.isSpoiler && !(e.isNSFW && (null == t || !t.shouldShowNSFWContent)))
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/models/Media/index.ts"),
				n = s("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === i.o.TEXT && !!t.content || t.type === i.o.RTJSON && !Object(n.I)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			}));
			var i = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/helpers/parseUrl.ts"),
				a = s("./src/reddit/selectors/media.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, s) => ({
					gallery: o.u(e, t, s),
					post: o.M(e, t),
					...o.q(e)
				}),
				l = (e, t) => s => ({
					...r(s, e, t),
					action: i.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.E(s, e)
				}),
				d = (e, t) => s => {
					const l = Object(n.a)(t),
						d = Object(a.d)(s, e) + 1;
					return {
						...r(s, e, d),
						action: i.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.E(s, e),
							outboundUrl: t,
							outboundDomain: l ? l.hostname : void 0
						}
					}
				},
				c = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => n => ({
					...r(n, e, s),
					action: i.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/helpers/isCrosspost.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx");
			const r = (e, t) => {
				let {
					post: s,
					pageLayer: r
				} = t;
				if (Object(o.F)(r)) return !0;
				const l = Object(o.y)(r),
					d = Object(a.a)(s);
				return !(!l || d) && (e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: i.Qb
					}) === i.Rd
				})(e)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab.88e72633cf490fd73bd4.js.map