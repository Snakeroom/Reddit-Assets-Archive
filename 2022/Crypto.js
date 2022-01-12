// https://www.redditstatic.com/desktop2x/Crypto.88222e312fc1271303df.js
// Retrieved at 1/12/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Crypto"], {
		"./node_modules/@reddit/crypto/react/nft-discovery/index.cjs.js": function(e, t, a) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t[Symbol.toStringTag] = "Module";
			var n = a("./node_modules/react/index.js"),
				s = a("./node_modules/classnames/index.js"),
				l = a("./node_modules/@reddit/crypto/react/ui/index.cjs.js");

			function r(e) {
				return e && "object" == typeof e && "default" in e ? e : {
					default: e
				}
			}
			var c = r(n),
				o = r(s);
			var i = "_container_u9f75_30",
				d = "_content_u9f75_43",
				u = "_copy_u9f75_47",
				m = "_title_u9f75_53",
				f = "_logoImage_u9f75_60",
				_ = "_iconImage_u9f75_63",
				v = "_hideIcon_u9f75_66";
			var p = {
				container: "_container_8yi1i_30",
				list: "_list_8yi1i_42",
				listItem: "_listItem_8yi1i_48",
				icon: "_icon_8yi1i_56",
				restoreAction: "_restoreAction_8yi1i_66"
			};
			t.DiscoveryBanner = ({
				className: e,
				onClick: t,
				onHide: a
			}) => c.default.createElement(c.default.Fragment, null, c.default.createElement("div", {
				className: o.default(e, i)
			}, c.default.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/discovery-image-aa8ee42c06.png",
				className: f
			}), c.default.createElement("div", {
				className: d
			}, c.default.createElement("h4", {
				className: m,
				"data-testid": "discovery:heading"
			}, "Your ", c.default.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/icon-aa7f21545a.svg",
				className: _
			}), " NFT, now your avatar!"), c.default.createElement("p", {
				className: u
			}, "You can now use digital collectables as your Reddit avatar"), c.default.createElement(l.Button, {
				theme: "largeOrange",
				onClick: t
			}, "Get Started"), c.default.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/close-48ec10fa5d.svg",
				className: v,
				onClick: a
			})))), t.NftPopupMenu = ({
				className: e,
				visible: t,
				onOutsideClick: a,
				target: n,
				hasNftAssigned: s,
				onCameraActionClick: r,
				onRestoreAction: i,
				onSelectNftAction: d
			}) => c.default.createElement(l.PopupBlock, {
				width: 238,
				position: "right",
				className: o.default(p.container, e),
				visible: t,
				target: n,
				yOffset: 5,
				onOutsideClick: a
			}, c.default.createElement("ol", {
				className: p.list
			}, c.default.createElement("li", {
				className: p.listItem,
				onClick: d
			}, c.default.createElement("div", {
				className: p.icon
			}, c.default.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/icon-select-nft-5d4acafe96.svg"
			})), c.default.createElement("div", {
				className: p.content
			}, "Select NFT")), c.default.createElement("li", {
				className: p.listItem,
				onClick: r
			}, c.default.createElement("div", {
				className: p.icon
			}, c.default.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/icon-camera-a8249a1424.svg"
			})), c.default.createElement("div", {
				className: p.content
			}, "Upload Image")), s && c.default.createElement("li", {
				className: o.default(p.listItem, p.restoreAction),
				onClick: i
			}, c.default.createElement("div", {
				className: p.icon
			}, c.default.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/icon-restore-3d3f7d48b6.svg"
			})), c.default.createElement("div", {
				className: p.content
			}, "Restore Default Avatar"))))
		},
		"./node_modules/@reddit/crypto/react/ui/index.cjs.js": function(e, t, a) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t[Symbol.toStringTag] = "Module";
			var n = a("./node_modules/react/index.js"),
				s = a("./node_modules/react-dom/index.js"),
				l = a("./node_modules/classnames/index.js");

			function r(e) {
				return e && "object" == typeof e && "default" in e ? e : {
					default: e
				}
			}
			var c = r(n),
				o = r(l);
			var i = "_overlay_1ul22_1",
				d = "_modal_1ul22_12";

			function u() {
				return document.createElement("div")
			}
			var m = {
				button: "_button_yu2mv_30",
				loadingButton: "_loadingButton_yu2mv_39",
				greyTheme: "_greyTheme_yu2mv_44",
				whiteTheme: "_whiteTheme_yu2mv_47",
				outlinedTheme: "_outlinedTheme_yu2mv_48",
				orangeTheme: "_orangeTheme_yu2mv_60",
				largeOrangeTheme: "_largeOrangeTheme_yu2mv_61",
				disabled: "_disabled_yu2mv_72"
			};

			function f(e) {
				switch (e) {
					case "grey":
						return m.greyTheme;
					case "white":
						return m.whiteTheme;
					case "outlined":
						return m.outlinedTheme;
					case "orange":
						return m.orangeTheme;
					case "largeOrange":
						return m.largeOrangeTheme
				}
			}

			function _(e) {
				switch (e) {
					case "grey":
						return m.greyTheme;
					case "white":
						return m.whiteTheme;
					case "orange":
						return m.orangeTheme
				}
			}
			var v = "_container_140hq_30",
				p = "_walletAddress_140hq_39",
				g = "_closeAction_140hq_46";
			const h = 12;
			var E = {
				container: "_container_nvenk_30",
				avatar: "_avatar_nvenk_43",
				avatarImage: "_avatarImage_nvenk_57",
				user: "_user_nvenk_61",
				username: "_username_nvenk_67",
				date: "_date_nvenk_70",
				comment: "_comment_nvenk_80",
				voting: "_voting_nvenk_85"
			};
			var y = {
				container: "_container_psvoe_30"
			};
			const w = ({
				value: e,
				direction: t,
				className: a
			}) => {
				const n = "up" === t;
				return c.default.createElement("div", {
					className: o.default(y.container, a, n ? y.upVote : y.downVote)
				}, c.default.createElement("img", {
					src: n ? "https://www.redditstatic.com/crypto-assets/v1/upvote-e1dfcbf404.svg" : "https://www.redditstatic.com/crypto-assets/v1/downvote-37897edc0e.svg"
				}), e ? function(e) {
					let t;
					"number" == typeof e ? (e >= 1e3 && (e /= 1e3, e = `${e=Math.round(100*e)/100}k`), t = e.toString()) : t = e;
					return t
				}(e) : void 0)
			};
			var N = "_container_1i42x_1",
				C = "_dot_1i42x_7",
				b = "_inactiveDot_1i42x_14",
				k = "_activeDot_1i42x_18";
			var q = "_container_2s198_1";
			const x = 365,
				A = 30,
				T = 7;
			var S = {
				container: "_container_1q16h_30",
				toast: "_toast_1q16h_42",
				bar: "_bar_1q16h_56",
				errorKind: "_errorKind_1q16h_59",
				successKind: "_successKind_1q16h_62",
				image: "_image_1q16h_65",
				content: "_content_1q16h_69",
				close: "_close_1q16h_76",
				entering: "_entering_1q16h_91",
				fadeIn: "_fadeIn_1q16h_1",
				leaving: "_leaving_1q16h_94",
				fadeOut: "_fadeOut_1q16h_1"
			};
			const j = ({
					className: e,
					kind: t,
					children: a,
					onClose: s,
					duration: l = 0
				}) => {
					const [r, i] = n.useState(!1), d = n.useRef(null), u = n.useCallback(e => {
						e && (e.stopPropagation(), e.preventDefault()), i(!0), s && s()
					}, [s]);
					return n.useEffect(() => {
						i(!1);
						const e = d.current;
						e && (e.classList.add(S.entering), e.addEventListener("animationend", () => {
							e.classList.remove(S.entering)
						}))
					}, [a]), n.useEffect(() => {
						const e = l ? setTimeout(u, l) : null;
						return () => {
							e && clearTimeout(e)
						}
					}, [l, u]), r ? c.default.createElement(c.default.Fragment, null) : c.default.createElement("div", {
						ref: d,
						className: o.default(S.toast, e, "error" === t ? S.errorKind : S.successKind)
					}, c.default.createElement("div", {
						className: S.bar
					}), c.default.createElement("div", {
						className: S.image
					}, c.default.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v1/error-image-c10a891d4e.svg"
					})), c.default.createElement("div", {
						className: S.content
					}, a), c.default.createElement("div", {
						className: S.close,
						onClick: u
					}, c.default.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v1/close-41452e2e4d.png"
					})))
				},
				I = "reddit-crypto-toast-wrapper";

			function P() {
				let e = document.getElementById(I);
				return e || ((e = document.createElement("div")).id = I, e.className = S.container, document.body.appendChild(e)), e
			}
			var O = "_container_10e6p_1";
			const M = ({
				className: e
			}) => c.default.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/loading-84b8aa447d.svg",
				className: o.default(e, O)
			});
			var L = "_container_q8ljo_1",
				D = "_nav_q8ljo_6",
				B = "_progressPills_q8ljo_14",
				F = "_slide_q8ljo_18",
				$ = "_closeAction_q8ljo_24";
			var K = {
				wrapper: "_wrapper_1qt09_1",
				container: "_container_1qt09_6",
				inner: "_inner_1qt09_10",
				active: "_active_1qt09_18",
				progress: "_progress_1qt09_1",
				post: "_post_1qt09_24"
			};
			const R = ({
				time: e = 2e3,
				delay: t = 100,
				paused: a,
				onStart: s,
				onEnd: l,
				onResumed: r,
				containerClassName: i,
				wrapperClassName: d,
				innerClassName: u,
				state: m
			}) => {
				const [f, _] = n.useState("pre"), [v, p] = n.useState(!1), g = function(e) {
					switch (e) {
						case "pre":
							return null;
						case "active":
							return K.active;
						case "post":
							return K.post
					}
				}(f), h = function(e, t, a, n) {
					if ("active" === e) return {
						animationPlayState: n ? "paused" : "running",
						animationDuration: `${t}ms`,
						animationDelay: `${a}ms`
					};
					return
				}(f, e, t, v);
				n.useEffect(() => {
					_(m)
				}, [m]), n.useEffect(() => {
					p(!!a)
				}, [a]);
				const E = n.useCallback(() => {
						p(!1), _("post"), l()
					}, []),
					y = n.useCallback(e => {
						switch (f) {
							case "post":
							case "pre":
								p(!1), s();
								break;
							case "active":
								const e = !v;
								p(e), e && r()
						}
					}, [f, v]);
				return c.default.createElement("div", {
					onClick: y,
					className: o.default(K.wrapper, d)
				}, c.default.createElement("div", {
					className: o.default(K.container, i)
				}, c.default.createElement("div", {
					onAnimationEnd: E,
					className: o.default(u, K.inner, g),
					style: h
				})))
			};
			var Y = "_container_12qrd_1",
				H = "_wrapper_12qrd_7",
				U = "_pill_12qrd_10",
				V = "_inner_12qrd_22";
			const W = ({
				className: e,
				pillClassName: t,
				total: a,
				slideTime: s,
				onChange: l,
				activeIndex: r = 0
			}) => {
				const i = n.useMemo(() => (function(e) {
						const t = [];
						for (let a = 0; a < e; a++) t.push(null);
						return t
					})(a), [a]),
					[d, u] = n.useState(0),
					[m, f] = n.useState(!1);
				! function(e) {
					n.useEffect(() => {
						if ("undefined" != typeof document && void 0 !== document.body) {
							const t = t => {
								e(t.key)
							};
							return document.body.addEventListener("keydown", t), () => {
								document.body.removeEventListener("keydown", t)
							}
						}
					}, [])
				}(e => {
					switch (e) {
						case " ":
							f(e => !e);
							break;
						case "ArrowLeft":
							u(e => Math.max(0, --e));
							break;
						case "ArrowRight":
							u(e => Math.min(i.length - 1, ++e))
					}
				}), n.useEffect(() => {
					u(r)
				}, [r]);
				const _ = n.useCallback(e => {
						u(e)
					}, []),
					v = n.useCallback(() => {
						f(!1)
					}, []),
					p = n.useCallback(() => {
						u(e => {
							const t = e + 1;
							return t >= i.length ? e : t
						})
					}, [i.length]);
				return n.useEffect(() => {
					u(r)
				}, [r]), n.useEffect(() => {
					f(!1), l(d)
				}, [d]), c.default.createElement("div", {
					className: o.default(e, Y)
				}, i.map((e, a) => {
					const n = function(e, t) {
						return e < t ? "pre" : e === t ? "active" : "post"
					}(d, a);
					return c.default.createElement(R, {
						key: a,
						time: s,
						paused: m,
						state: n,
						wrapperClassName: o.default(H, t),
						containerClassName: U,
						innerClassName: V,
						onResumed: v,
						onEnd: p,
						onStart: () => _(a)
					})
				}))
			};
			var G = "_container_108ua_1";

			function X(e) {
				return "number" == typeof e && (e = parseInt(e)), `${e}px`
			}
			const z = "reddit-crypto-popup-block";

			function J() {
				let e = document.getElementById(z);
				return e || ((e = document.createElement("div")).id = z, document.body.appendChild(e)), e
			}
			t.Age = ({
				className: e,
				value: t
			}) => c.default.createElement("div", {
				className: e
			}, function(e) {
				let t;
				"number" == typeof e ? (e > x ? e = `${Math.floor(e/x)}y` : e > A ? e = `${Math.floor(e/A)}m` : e > T && (e = `${Math.floor(e/T)}w`), t = e.toString()) : t = e;
				return t
			}(t)), t.Arrow = ({
				direction: e,
				className: t,
				onClick: a
			}) => c.default.createElement("img", {
				src: "left" === e ? "https://www.redditstatic.com/crypto-assets/v1/left-9f8bd2acfc.png" : "https://www.redditstatic.com/crypto-assets/v1/right-90f1b669a6.png",
				className: o.default(t, q),
				onClick: a
			}), t.Button = ({
				className: e,
				theme: t = "white",
				disabled: a,
				onClick: n,
				children: s,
				loading: l
			}) => c.default.createElement("button", {
				onClick: a ? void 0 : n,
				className: o.default(m.button, e, l ? m.loadingButton : null, a ? m.disabled : null, f(t))
			}, l ? c.default.createElement(M, {
				className: m.loadingImage
			}) : c.default.createElement(c.default.Fragment, null, s)), t.ButtonLink = ({
				className: e,
				theme: t = "white",
				href: a,
				children: n
			}) => c.default.createElement("a", {
				href: a,
				target: "_blank",
				className: o.default(m.button, e, _(t))
			}, n), t.CommentExample = ({
				username: e,
				avatarImage: t,
				datePosted: a,
				comment: n,
				upvotes: s,
				className: l
			}) => {
				const r = "string" == typeof t ? c.default.createElement("img", {
					className: E.avatarImage,
					src: t
				}) : c.default.createElement(c.default.Fragment, null, t);
				return c.default.createElement("div", {
					className: o.default(l, E.container)
				}, c.default.createElement("div", {
					className: E.avatar
				}, r), c.default.createElement("div", {
					className: E.content
				}, c.default.createElement("div", {
					className: E.user
				}, c.default.createElement("span", {
					className: E.username
				}, e), c.default.createElement("span", {
					className: E.date
				}, c.default.createElement("span", null, a))), c.default.createElement("div", {
					className: E.comment
				}, n), c.default.createElement("div", {
					className: E.voting
				}, c.default.createElement(w, {
					direction: "up",
					className: E.upvotes,
					value: s
				}), c.default.createElement(w, {
					direction: "down",
					className: E.downvotes
				}))))
			}, t.LoadingSpinner = M, t.Modal = ({
				overlayClassName: e,
				modalClassName: t,
				children: a,
				onClosed: l,
				width: r,
				height: m
			}) => {
				const f = n.useCallback(e => {
						e.stopPropagation(), l && l()
					}, []),
					_ = n.useMemo(u, []);
				n.useEffect(() => {
						document.body.style.overflowY = "hidden";
						const e = document.body;
						return e.appendChild(_), () => {
							document.body.style.removeProperty("overflow-y"), e.removeChild(_)
						}
					}, []),
					function(e) {
						n.useEffect(() => {
							const t = t => {
								"Escape" === t.key && (t.stopPropagation(), t.preventDefault(), e())
							};
							return document.body.addEventListener("keydown", t), () => {
								document.body.removeEventListener("keydown", t)
							}
						}, [])
					}(() => {
						l && l()
					});
				const v = n.useCallback(e => {
						e.stopPropagation()
					}, []),
					p = {
						"--react-crypto-modal-width": r ? `${r}px` : void 0,
						"--react-crypto-modal-height": m ? `${m}px` : void 0
					};
				return s.createPortal(c.default.createElement("div", {
					className: o.default(e, i),
					onClick: f
				}, c.default.createElement("div", {
					className: o.default(t, d),
					onClick: v,
					style: p
				}, c.default.createElement(c.default.Fragment, null, a))), _)
			}, t.PopupBlock = ({
				className: e,
				target: t,
				width: a,
				visible: l,
				position: r,
				children: i,
				onOutsideClick: d,
				xOffset: u = 0,
				yOffset: m = 0
			}) => {
				const f = n.useMemo(() => {
						const {
							x: e,
							y: n
						} = function(e, t, a, n, s) {
							let l = -9999,
								r = -9999;
							if (e) {
								const c = e.getBoundingClientRect();
								l = c.left + window.scrollX + n, r = c.top + window.scrollY + c.height + s, "right" === a && (l += e.offsetWidth - t)
							}
							return {
								x: X(l),
								y: X(r)
							}
						}(l ? t : null, a, r, u, m);
						return {
							top: n,
							left: e,
							width: X(a)
						}
					}, [l, t, a, u, m, r]),
					_ = n.useCallback(e => {
						e.stopPropagation()
					}, []),
					v = n.useCallback(e => {
						d(e)
					}, []);
				n.useEffect(() => {
					const e = () => {
						document.body.removeEventListener("click", v)
					};
					return l ? document.body.addEventListener("click", v) : e(), e
				}, [l, v]);
				const p = n.useMemo(J, []);
				return n.useEffect(() => {
					const e = document.body;
					return e.appendChild(p), () => {
						e.removeChild(p)
					}
				}, []), t ? s.createPortal(c.default.createElement("div", {
					className: o.default(G, e),
					style: f,
					onClick: _
				}, c.default.createElement(c.default.Fragment, null, i)), p) : c.default.createElement(c.default.Fragment, null)
			}, t.ProgressDots = ({
				selectedIndex: e = 0,
				total: t,
				onSelect: a,
				className: s,
				dotClassName: l
			}) => {
				const r = n.useMemo(() => (function(e) {
						const t = new Array(e);
						for (let a = 0, n = 1; a < e; a++, n++) t[a] = n;
						return t
					})(t), [t]),
					[i, d] = n.useState(e);
				n.useEffect(() => {
					i !== e && (d(e), a(e))
				}, [e, i]);
				const u = n.useCallback((e, t) => {
					e.preventDefault(), e.stopPropagation(), d(t), a(t)
				}, []);
				return c.default.createElement("div", {
					className: o.default(N, s)
				}, r.map((e, t) => c.default.createElement("div", {
					key: t,
					className: o.default(C, l, t === i ? k : b),
					onClick: e => u(e, t)
				})))
			}, t.Story = ({
				slides: e,
				activeIndex: t,
				slideTime: a,
				navClassName: s,
				showCloseAction: l,
				onCloseClick: r,
				className: i,
				slideClassName: d,
				closeActionClassName: u
			}) => {
				const [m, f] = n.useState(0), _ = n.useCallback(e => {
					f(e)
				}, []), v = e[m];
				return c.default.createElement("div", {
					className: o.default(L, i)
				}, c.default.createElement("nav", {
					className: o.default(s, D)
				}, c.default.createElement(W, {
					className: B,
					slideTime: a,
					total: e.length,
					onChange: _
				}), l && c.default.createElement("span", {
					className: o.default($, u),
					onClick: r
				})), c.default.createElement("div", {
					className: o.default(d, F)
				}, c.default.createElement(c.default.Fragment, null, v)))
			}, t.Toast = ({
				className: e,
				kind: t,
				children: a,
				onClose: l,
				duration: r = 0
			}) => {
				if ("undefined" == typeof document || void 0 === document.createElement) return c.default.createElement(c.default.Fragment, null);
				const o = n.useMemo(P, []);
				return s.createPortal(c.default.createElement(j, {
					className: e,
					kind: t,
					onClose: l,
					duration: r
				}, a), o)
			}, t.Vote = w, t.WalletPill = ({
				walletAddress: e,
				className: t,
				onClose: a
			}) => {
				const s = n.useCallback(e => {
						e.preventDefault(), e.stopPropagation(), a()
					}, [a]),
					l = n.useMemo(() => (function(e) {
						if (e.length > h) {
							const t = e.substring(0, 5),
								a = e.substring(e.length - 4);
							e = `${t}...${a}`
						}
						return e
					})(e), [e]);
				return c.default.createElement("div", {
					className: o.default(v, t)
				}, c.default.createElement("img", {
					src: "https://www.redditstatic.com/crypto-assets/v1/vault-9ed00b913b.svg"
				}), c.default.createElement("span", {
					className: p
				}, l), c.default.createElement("img", {
					className: g,
					src: "https://www.redditstatic.com/crypto-assets/v1/x-96d423f7c2.svg",
					onClick: s
				}))
			}
		},
		"./node_modules/classnames/index.js": function(e, t, a) {
			var n;
			! function() {
				"use strict";
				var a = {}.hasOwnProperty;

				function s() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var l = typeof n;
							if ("string" === l || "number" === l) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var r = s.apply(null, n);
									r && e.push(r)
								}
							} else if ("object" === l)
								if (n.toString === Object.prototype.toString)
									for (var c in n) a.call(n, c) && n[c] && e.push(c);
								else e.push(n.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (s.default = s, e.exports = s) : void 0 === (n = function() {
					return s
				}.apply(t, [])) || (e.exports = n)
			}()
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Crypto.88222e312fc1271303df.js.map