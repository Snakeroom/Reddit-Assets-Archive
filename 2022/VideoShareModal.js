// https://www.redditstatic.com/desktop2x/VideoShareModal.df7016b69305d0e351fa.js
// Retrieved at 10/27/2022, 1:50:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["VideoShareModal"], {
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				l = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				u = s("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				p = s("./src/reddit/selectors/experiments/econ/index.ts"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				C = s.n(h);
			const v = d.a.div("Userpic", C.a);
			t.a = r()(e => {
				let {
					defaultImage: t,
					userId: s
				} = e;
				const n = Object(l.e)(p.p),
					{
						processingAvatarImageUrl: r
					} = a.a;
				if (n) return t ? c.a.createElement("img", {
					className: C.a.NewUserpic,
					src: t,
					alt: "user icon"
				}) : c.a.createElement(u.a, {
					className: C.a.NewUserpic,
					userId: s
				});
				const o = (e => e.replace(i.Nb.Account + "_", ""))(s),
					{
						avatar: d,
						color: h
					} = (e => {
						const t = m.length,
							s = parseInt(e, 36),
							a = s % 20 + 1,
							n = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + a).slice(-2),
							color: m[n]
						}
					})(o),
					x = `${r}/avatar_default_${d}_${h}.png`;
				return c.a.createElement(v, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${x})`,
						backgroundColor: `#${h}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				roundedIcon: "qzfpAikXRAwHLMGlL6_5m",
				NewUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				newUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, s) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				l = s.n(c);
			t.a = e => {
				let {
					className: t,
					style: s = {},
					userId: n
				} = e;
				const {
					processingAvatarImageUrl: c
				} = a.a, i = `url(${c}/defaults/v2/avatar_default_${(e=>{let t=0;for(const s of e)t+=s.charCodeAt();return t%8})(n)}.png)`;
				return r.a.createElement("div", {
					className: Object(o.a)(l.a.avatar, t),
					style: {
						...s,
						backgroundImage: i
					}
				})
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/extractQueryParams/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/mapToObject/index.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				h = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				C = s("./src/reddit/controls/RadioInput/index.tsx"),
				v = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				x = s("./src/reddit/controls/TextButton/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				w = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModalStyles.m.less"),
				_ = s.n(f);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = d.a.input("TextBox", _.a), k = d.a.wrapped(u.i, "ModalHeader", _.a), N = d.a.wrapped(x.a, "TextButton", _.a), I = d.a.div("FooterRow", _.a), L = e => `${e<10?"0":""}${e}`;
			class y extends n.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const e = Math.trunc((this.context.currentTime || 0) / 60),
							t = Math.trunc((this.context.currentTime || 0) % 60);
						this.setState({
							minutes: e,
							seconds: t,
							displayMinutes: L(e),
							displaySeconds: L(t),
							useTimestamp: !1
						})
					}, this.onTypeChange = e => {
						this.setState({
							useTimestamp: "true" === e
						})
					}, this.onMinutesInputChange = e => {
						const t = parseInt(e.currentTarget.value) || 0,
							s = Math.trunc(this.context.totalTime / 60);
						t >= 0 && t <= s && this.setState({
							minutes: t,
							displayMinutes: 0 === t ? "" : t.toString()
						})
					}, this.onSecondsInputChange = e => {
						const t = parseInt(e.currentTarget.value.substr(-2)) || 0,
							s = Math.trunc(this.context.totalTime % 60),
							a = Math.trunc(this.context.totalTime / 60);
						t >= 0 && t < 60 && !(this.state.minutes === a && t > s) && this.setState({
							seconds: t,
							displaySeconds: 0 === t ? "" : `0${t}`.substr(-2)
						})
					}, this.onSecondsInputBlur = () => {
						this.setState({
							displaySeconds: L(this.state.seconds)
						})
					}, this.onMinutesInputBlur = () => {
						this.setState({
							displayMinutes: L(this.state.minutes)
						})
					}, this.handleClickCopy = () => {
						this.props.onClose(this.url)
					}, this.handleClickClose = () => {
						this.props.onClose()
					}, this.state = {
						minutes: 0,
						seconds: 0,
						displayMinutes: "00",
						displaySeconds: "00",
						useTimestamp: !1
					}
				}
				get baseUrl() {
					const {
						protocol: e,
						host: t,
						pathname: s
					} = o.a.parse(this.props.url);
					return `${e}//${t}${s}`
				}
				get timestamp() {
					return 60 * this.state.minutes + this.state.seconds || 0
				}
				get displayUrl() {
					return this.state.useTimestamp ? Object(l.a)(this.baseUrl, {
						ts: this.timestamp
					}) : this.baseUrl
				}
				get url() {
					return this.state.useTimestamp ? Object(l.a)(this.baseUrl, {
						ts: this.timestamp,
						...Object(m.a)(Object(i.a)(this.props.url))
					}) : this.props.url
				}
				render() {
					return n.a.createElement(u.e, null, n.a.createElement(k, null, n.a.createElement(w.a, null, n.a.createElement(u.q, null, E._("Share", null, {
						hk: "1jIG3I"
					})), n.a.createElement(N, {
						onClick: this.handleClickClose
					}, n.a.createElement(u.b, null)))), n.a.createElement(u.l, null, n.a.createElement(b.a, null, n.a.createElement(g, {
						disabled: !0,
						value: this.displayUrl
					}), n.a.createElement(N, {
						onClick: this.handleClickCopy
					}, E._("Copy", null, {
						hk: "2bETeK"
					})))), n.a.createElement(I, null, n.a.createElement(C.a, {
						name: "share-link",
						onChange: this.onTypeChange,
						value: String(this.state.useTimestamp)
					}, n.a.createElement(v.a, {
						showButton: !0,
						value: "false",
						className: _.a.radioOption
					}, this.context.isLive ? n.a.createElement(n.a.Fragment, null, E._("Share", null, {
						hk: "3LcrOx"
					}), n.a.createElement("span", {
						className: _.a.liveStatus
					}, n.a.createElement(h.g, null))) : E._("Share from beginning", null, {
						hk: "4rKJB"
					})), n.a.createElement(v.a, {
						showButton: !0,
						value: "true",
						className: _.a.radioOption
					}, E._("Start from", null, {
						hk: "4lQjLy"
					}), n.a.createElement("div", {
						className: _.a.timeInputWrapper
					}, n.a.createElement("input", {
						className: _.a.minutesTimeInput,
						onChange: this.onMinutesInputChange,
						onBlur: this.onMinutesInputBlur,
						type: "text",
						maxLength: 4,
						size: 4,
						value: this.state.displayMinutes,
						placeholder: "00"
					}), ":", n.a.createElement("input", {
						className: _.a.secondsTimeInput,
						onChange: this.onSecondsInputChange,
						onBlur: this.onSecondsInputBlur,
						type: "text",
						maxLength: 3,
						size: 2,
						value: this.state.displaySeconds,
						placeholder: "00"
					}))))))
				}
			}
			y.contextType = p.a, t.default = Object(c.a)(y)
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModalStyles.m.less": function(e, t, s) {
			e.exports = {
				TextBox: "NQTi34lXQj3KQwNahM55V",
				textBox: "NQTi34lXQj3KQwNahM55V",
				ModalHeader: "_2nMk_ghAxbCRYxB673TguC",
				modalHeader: "_2nMk_ghAxbCRYxB673TguC",
				TextButton: "qG6sJYgtP-NJ29PHNvf7k",
				textButton: "qG6sJYgtP-NJ29PHNvf7k",
				FooterRow: "_1eio1wCjLYTQcEi05o3Nt-",
				footerRow: "_1eio1wCjLYTQcEi05o3Nt-",
				radioOption: "_3dl19ZqUXki6QvqmOh1Od7",
				radioOn: "_2EUcT-MveSjYAKOpXq5X7g",
				minutesTimeInput: "_2b4MwgRgq8UqepSf5zPM7p",
				timeInput: "_35_c2zmPhyUU9disN4msAN",
				secondsTimeInput: "_3MBOUkWBSmuK-HtMm_cDz7",
				liveStatus: "_178Bx6qfdrWqUuTLwu7OG_",
				timeInputWrapper: "_3KqE5xyPLta2yz3DVzHmar"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "a", (function() {
				return f
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				c = (s("./src/lib/opener/index.ts"), s("./src/reddit/components/OverflowMenu/index.tsx"), s("./src/reddit/controls/Dropdown/Row.tsx"), s("./src/reddit/actions/publicAccessNetwork/constants.ts"), s("./src/reddit/icons/fonts/Menu/index.tsx")),
				l = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/svgs/Crosspost/index.tsx")),
				i = (s("./src/reddit/icons/svgs/Hide/index.tsx"), s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"), s("./src/reddit/icons/svgs/Report/index.tsx"), s("./src/reddit/icons/svgs/Rules/index.tsx"), s("./src/reddit/icons/svgs/VideoMute/index.tsx")),
				d = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				m = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				u = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				p = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				h = s.n(p);
			const C = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return r.a.createElement("button", {
						className: h.a.muteButton,
						onClick: s,
						"aria-label": a.fbt._("mute video", null, {
							hk: "Enspe"
						}),
						value: "mute"
					}, t ? r.a.createElement(i.a, {
						className: h.a.volumeIcon
					}) : r.a.createElement(u.a, {
						className: h.a.volumeIcon
					}))
				},
				v = (o.a.wrapped(c.a, "menuIcon", h.a), "rpan-overlay-menu"),
				x = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: h.a.promptButton,
						onClick: t
					}, r.a.createElement(d.a, null), r.a.createElement("span", null, a.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					})))
				},
				b = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: h.a.promptButton,
						onClick: t
					}, r.a.createElement(m.a, null), r.a.createElement("span", null, a.fbt._("Share Video", null, {
						hk: "FYgQy"
					})))
				},
				w = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: h.a.promptButton,
						onClick: t
					}, r.a.createElement(l.a, {
						className: h.a.crosspostIcon
					}), r.a.createElement("span", null, a.fbt._("Crosspost", null, {
						hk: "gORNr"
					})))
				},
				f = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: `${h.a.promptButton} ${h.a.awardButton}`,
						onClick: t
					}, r.a.createElement("span", null, a.fbt._("Award Now", null, {
						hk: "STk0L"
					})))
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_3w_dLAoZ36_fPFvFr73Twc",
				visible: "_3xefvVa9iQxtBKfDrIQHK5",
				overlayCenter: "_38XOKvg5Aum-pHj1zsk3Gh",
				muteButton: "_1loeDj0ZNN1lkR8TbCnX5L",
				overlayTitle: "_1NnuLtMElnw61J8beBBk1b",
				overlayTop: "t59TT9rQbiEQkmrsaaYfs",
				menuContainer: "_27178MBeTCoso3gtVeQoIp",
				titleContainer: "S05_Ivx6gzKZmSRXiZa2g",
				menuButton: "s36uqi4axSXHQMgaoux_n",
				shareButton: "_5sKR5rHQgiTK5_-gvLzJ9",
				reportIcon: "_3xY0AQnECn_6gvYN_s0gcK",
				menuIcon: "_1xrQmhCkwYzatHLEBV1tG-",
				videoTitle: "_17PXlsAvhmFm8yKmnpboBI",
				RecordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				recordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				volumeIcon: "_39-jgt3SIm_nk5n7j3QEfp",
				overlayBottom: "_1ZAJ7W6IsblPMAseqf_W_1",
				scrubberBar: "_3i-PRgw3NW9Db-1qAmdcMh",
				intro: "_1CsY8N-fPRu-iQN8ocPZCD",
				prompt: "_1KVVoPIOqNFBVgfKKhI6IJ",
				overflowItemIconWrapper: "_1B5cn8nAxfnEGrx_5yO_Pn",
				overflowItemShareIconWrapper: "_1yj1zqZ3kkITELqdJJu_rL",
				overflowItemIcon: "_2rs0m2DYBYodAJnsjGNR1r",
				promptButtonSet: "_1Iw3svNrJVGVZG8lv_0RkZ",
				promptButton: "_2k4XxsTat5YM_3MLe7Qvlr",
				awardButton: "xXntZktZERg_h5_1RbTAJ",
				awardOverlaySpectacle: "_2KvsuLKnVtlqMTrKCouaF8",
				crosspostIcon: "_3K89LyvZmnoHxqieScyV0A"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_1EF49Psgos8vYl_v7Tflby",
				prompt: "_3q-CHmWq_WQdcLlNanmTlw",
				overlayTopLeft: "_3_ut3gTYu6aZliMETvG4qO",
				overlayTopRight: "_2adYh4QIiecMkKiax2nLBy",
				overlayTop: "-sfg01vEb_tZ17EEtV_1n",
				overlayBottom: "_2Pa8FxBcwFuR-eB88yFeb5",
				meta: "_37KNxMPFQ_aTyagqFCGM8f",
				visible: "MyDXLhLhWFWpDWQxwob4n",
				broadcastStatus: "RkAyxHZcfmYratKiIe6F1",
				subredditInfo: "hWK-1DjIzUQro_Jl7EuW7",
				endBroadcastItem: "_1ZSrZdjsokjz4UfFGhHFJK",
				endBroadcastIcon: "Nqg4E3olZnnFBq1hDMd1l",
				live: "_2MrLGchkK1FzIihZNcSErL",
				subreddit: "_2HJ6_jH0Qxso0BklDa4MY8",
				dropdownLabel: "_2EdFq4jwAX3s-k2ywmNUdA",
				dropdownRow: "_2TUKPRdgdRLBjd4A65bAv8",
				title: "_2BOjTR_ZfK356j4GUU_uP0",
				watchersCount: "_3qmsTjPgq3yEn2MRAvyKWV",
				controls: "_3Ve6YrAPjNqahWzatg2r-G",
				actionButton: "_3ljeo8vtq9QnPE3mBHJzLA",
				checkmarkIcon: "_1AD2nB9gj2sFeuP9eqLTJm",
				joinButton: "M1wl6M6YPUIzVkVKZ7RMx",
				plusIcon: "vnhfQ_Oj9V7tGTplUaavs",
				joinText: "lNpXHxQlf6Kotiochq5Bn",
				actionIcon: "_1m2Qj2Gr-_ZW8QCWjX1c_-",
				shareButton: "_3aLywHN9oVLU-kDGYrO_9Y",
				shareIcon: "_1FiOf9-VyeRBZ03fpzjZzd",
				menuButton: "_2Da-2PvZbZEChxL9motRgr",
				menuIcon: "_1cP74uG4uBeJE6MSnql_Vl",
				votePanel: "_3ARoHXimg9SEIdTS36iYA7",
				voteButton: "_3zRF3x1PVktfO77yiL70dM",
				voteIcon: "zV_29gkXZ2wlev53b5UKw",
				upVoteButton: "_3JZvxzBdRrDL22bOmPikWG",
				voted: "_2mS9j06DUO6bQJiPNNWTYq",
				downVoteButton: "LCSHLUW784jIQ0h3m1oAH",
				score: "_31PjwlFA4843J48jMG4YzK",
				hidden: "_3SFmtJd2uzRfmIgPvi-Yid",
				promptButtonSet: "_2-JNYG0bcwDm13ZkpVuW99",
				awardPromptWrapper: "_1J2SNfou9P_BKlDY42rZgE",
				awardPromptLabel: "_3EmfXMw_zUNf46UsW8EyGZ",
				overflowItem: "_3fblWdGk58C7B4Z-xzpJvc",
				overflowItemIcon: "_3ewXmdMvnO7M4rmOI_4slp",
				overflowItemIconWrapper: "_2SxcFwxbNeVOto1h-N6Xk8",
				shareMenuOverflowItem: "_2dljfU_juYhFbwLAeZ0ygH",
				headerItem: "_1pvWMzMb_uz-A-2Si3SoIl",
				subscribeToProfileButton: "DkFs_kVT8lE3xhsCfwKM_",
				subscribeToProfileAvatar: "_zREeeCx3pI1sg-PeDRDV",
				snoovatarHeadshot: "_1D275qlcFd5Qai7NjYppWD",
				subscribeToProfileStatus: "ya7YWsKVy6B_6Yq6fJcgc",
				isSubscribed: "FJ0cySrU3DrwLTyKRy-Rk"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return K
			})), s.d(t, "h", (function() {
				return Y
			})), s.d(t, "g", (function() {
				return z
			})), s.d(t, "p", (function() {
				return q
			})), s.d(t, "f", (function() {
				return Q
			})), s.d(t, "l", (function() {
				return J
			})), s.d(t, "n", (function() {
				return $
			})), s.d(t, "r", (function() {
				return G
			})), s.d(t, "j", (function() {
				return te
			})), s.d(t, "k", (function() {
				return se
			})), s.d(t, "i", (function() {
				return oe
			})), s.d(t, "q", (function() {
				return ce
			})), s.d(t, "d", (function() {
				return ue
			})), s.d(t, "o", (function() {
				return pe
			})), s.d(t, "b", (function() {
				return he
			})), s.d(t, "a", (function() {
				return Ce
			})), s.d(t, "e", (function() {
				return ve
			})), s.d(t, "s", (function() {
				return xe
			})), s.d(t, "m", (function() {
				return be
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/opener/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				m = s("./src/lib/makeActionCreator/index.ts"),
				u = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/login.ts");
			Object(m.a)(d.D);
			var C = s("./src/reddit/actions/subscription/index.ts"),
				v = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				x = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				w = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				E = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				g = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				N = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				I = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				L = s("./src/reddit/icons/fonts/Share/index.tsx"),
				y = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				S = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				M = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				B = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				j = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				T = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				O = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				V = s("./src/reddit/icons/svgs/Report/index.tsx"),
				A = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				P = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				R = s("./src/reddit/icons/svgs/Video/index.tsx"),
				D = s("./src/reddit/models/Vote/index.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				Z = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				W = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				U = s.n(W);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = e => {
				let {
					children: t
				} = e;
				return n.a.createElement("div", {
					className: U.a.broadcastStatus
				}, t)
			}, Y = e => {
				let {
					onClick: t
				} = e;
				return n.a.createElement("button", {
					onClick: t
				}, n.a.createElement(z, null))
			}, z = () => H._("{=Live}", [H._param("=Live", n.a.createElement("span", {
				className: U.a.live
			}, H._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), q = () => H._("Recorded live", null, {
				hk: "2seH5c"
			}), Q = e => {
				let {
					onSubscribe: t,
					isSubscribed: s
				} = e;
				const [r, o] = Object(a.useState)(!1);
				return Object(a.useEffect)(() => {
					const e = setTimeout(() => {
						o(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [r]), s ? r ? n.a.createElement(S.a, {
					className: U.a.checkmarkIcon
				}) : null : n.a.createElement("button", {
					onClick: () => {
						o(!0), t()
					},
					className: U.a.joinButton
				}, n.a.createElement(T.a, {
					className: U.a.plusIcon
				}), n.a.createElement("span", {
					className: U.a.joinText
				}, H._("Join", null, {
					hk: "3n0zBz"
				})))
			}, J = e => {
				let {
					onSelect: t,
					related: s,
					subreddit: a,
					subreddits: r
				} = e, o = "";
				o = "home" === s ? "All" : "r/popular" === s ? "r/popular" : a || "All";
				const c = r.filter(e => e.prefixedName !== o),
					l = 30 + 35 * c.length;
				return n.a.createElement(x.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("span", {
						className: U.a.subreddit
					}, a || "RPAN"),
					style: {
						maxHeight: `${l}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, n.a.createElement("div", {
					className: U.a.dropdownLabel
				}, H._("Pick a Community", null, {
					hk: "4AfDwd"
				})), c.map(e => n.a.createElement(f.b, {
					className: U.a.dropdownRow,
					displayText: e.prefixedName,
					key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
					onClick: () => t(e)
				})))
			}, $ = e => {
				let {
					text: t
				} = e;
				return n.a.createElement("h1", {
					className: U.a.title
				}, t)
			}, G = e => {
				let {
					broadcast: t,
					live: s
				} = e;
				return n.a.createElement("div", {
					className: U.a.watchersCount
				}, s ? n.a.createElement(X, {
					count: Math.max(1, t.continuous_watchers)
				}) : n.a.createElement(ee, {
					count: Math.max(1, t.unique_watchers)
				}))
			}, X = e => {
				let {
					count: t
				} = e;
				return H._({
					"*": "{number of watchers} watchers",
					_1: "1 watcher"
				}, [H._plural(t, "number of watchers", Object(i.b)(t, {
					displayFull: !0
				}))], {
					hk: "3F0Nj0"
				})
			}, ee = e => {
				let {
					count: t
				} = e;
				return H._({
					"*": "{number of views} views",
					_1: "1 view"
				}, [H._plural(t, "number of views", Object(i.b)(t, {
					displayFull: !0
				}))], {
					hk: "tSTjT"
				})
			}, te = "rpan-overlay-share-menu", se = e => {
				let {
					onClickCrosspost: t,
					onClickVideoShare: s,
					onClickShare: a,
					onClickShareToChat: r
				} = e;
				return n.a.createElement(x.b, {
					className: U.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: te,
					onClick: a,
					icon: n.a.createElement(L.a, null)
				}, n.a.createElement(f.b, {
					className: U.a.menuOverflowItem,
					displayText: H._("Copy Link", null, {
						hk: "2oo038"
					}),
					iconWrapperClassName: U.a.overflowItemShareIconWrapper,
					key: `${re}-share`,
					onClick: s
				}, n.a.createElement(k.a, {
					name: "link_post",
					className: U.a.linkIcon
				})), n.a.createElement(f.b, {
					className: U.a.menuOverflowItem,
					displayText: H._("Crosspost", null, {
						hk: "QSd6Z"
					}),
					iconWrapperClassName: U.a.overflowItemShareIconWrapper,
					key: `${re}-crosspost`,
					onClick: t
				}, n.a.createElement(k.a, {
					name: "crosspost",
					className: U.a.overflowItemIcon
				})), n.a.createElement(f.b, {
					className: U.a.menuOverflowItem,
					displayText: H._("Share to Chat", null, {
						hk: "2uVgxZ"
					}),
					iconWrapperClassName: U.a.overflowItemShareIconWrapper,
					key: `${re}-sharetochat`,
					onClick: r
				}, n.a.createElement(k.a, {
					name: "chat",
					className: U.a.overflowItemIcon
				})))
			}, ae = c.a.wrapped(I.a, "menuIcon", U.a), ne = e => {
				let t = 186;
				if (e) {
					t += 74 + 40
				}
				return t
			}, re = "rpan-overlay-menu", oe = e => {
				let {
					onClick: t,
					onHideClick: s,
					onReportClick: a,
					onToggleLockClick: r,
					isCommentsLocked: o,
					hasModeratorPermissions: c,
					onEndBroadcastClick: i,
					onRpanStudioClick: m,
					subreddit: u
				} = e;
				return n.a.createElement(x.b, {
					className: U.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: re,
					icon: n.a.createElement(ae, null),
					onClick: t,
					style: {
						maxHeight: `${ne(c)}px`,
						overflowY: "auto",
						bottom: "0px"
					}
				}, n.a.createElement(f.b, {
					className: U.a.overflowItem,
					displayText: H._("View rules", null, {
						hk: "haY6r"
					}),
					iconWrapperClassName: U.a.overflowItemIconWrapper,
					key: `${re}-rules`,
					onClick: () => Object(l.e)(d.S, l.d.BLANK)
				}, n.a.createElement(A.a, {
					className: U.a.overflowItemIcon
				})), n.a.createElement(f.b, {
					className: U.a.overflowItem,
					displayText: H._("Stream from desktop", null, {
						hk: "4dOdik"
					}),
					iconWrapperClassName: U.a.overflowItemIconWrapper,
					key: `${re}-rpanstudio`,
					onClick: m
				}, n.a.createElement(R.a, {
					className: U.a.overflowItemIcon
				})), n.a.createElement(f.b, {
					className: U.a.overflowItem,
					displayText: H._("Visit community", null, {
						hk: "2KViLk"
					}),
					iconWrapperClassName: U.a.overflowItemIconWrapper,
					key: `${re}-community`,
					onClick: () => {
						Object(l.e)(Object(E.a)(u), l.d.BLANK)
					}
				}, (e => {
					const t = e && Object(_.a)({
						subreddit: e
					});
					return t ? n.a.createElement("img", {
						className: U.a.overflowItemIcon,
						style: {
							borderRadius: "16px",
							height: "16px",
							width: "16px"
						},
						src: t
					}) : n.a.createElement(M.a, {
						className: U.a.overflowItemIcon,
						style: {
							borderRadius: "16px",
							height: "16px",
							width: "16px"
						}
					})
				})(u)), n.a.createElement(f.b, {
					className: U.a.overflowItem,
					displayText: H._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: U.a.overflowItemIconWrapper,
					key: `${re}-report`,
					onClick: a
				}, n.a.createElement(V.a, {
					className: U.a.overflowItemIcon
				})), n.a.createElement(f.b, {
					className: U.a.overflowItem,
					displayText: H._("Hide", null, {
						hk: "15vs9C"
					}),
					iconWrapperClassName: U.a.overflowItemIconWrapper,
					key: `${re}-hide`,
					onClick: s
				}, n.a.createElement(B.a, {
					className: U.a.overflowItemIcon
				})), c && n.a.createElement(n.a.Fragment, null, n.a.createElement(f.b, {
					className: U.a.headerItem,
					displayText: H._("Mod Actions", null, {
						hk: "19zCiw"
					}),
					key: `${re}-modaction`,
					onClick: () => {}
				}), n.a.createElement(f.b, {
					className: U.a.overflowItem,
					displayText: o ? H._("Unlock comments", null, {
						hk: "Btg6R"
					}) : H._("Lock comments", null, {
						hk: "3Ew6q9"
					}),
					iconWrapperClassName: U.a.overflowItemIconWrapper,
					key: `${re}-lock`,
					onClick: r
				}, o ? n.a.createElement(P.a, {
					className: U.a.overflowItemIcon
				}) : n.a.createElement(j.a, {
					className: U.a.overflowItemIcon
				})), n.a.createElement(f.b, {
					className: U.a.endBroadcastItem,
					displayText: H._("Remove broadcast", null, {
						hk: "3GaDuI"
					}),
					iconWrapperClassName: U.a.overflowItemIconWrapper,
					key: `${re}-end`,
					onClick: i
				}, n.a.createElement(O.a, {
					className: U.a.endBroadcastIcon
				}))))
			}, ce = Object(r.b)(null, e => ({
				vote: (t, s) => e(((e, t) => async (s, a, n) => {
					let {
						apiContext: r
					} = n;
					const o = a();
					Object(p.R)(o) ? await Object(u.g)(r(), e, t) : s(Object(h.openLoginModal)())
				})(t, s))
			}))(class extends a.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(D.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(D.a.downvoted);
						this.vote(e)
					}, this.state = {
						voteStates: new Map
					}
				}
				get voteState() {
					return this.state.voteStates.get(this.props.broadcast.post.id)
				}
				get score() {
					const {
						score: e,
						voteState: t
					} = this.props.broadcast.post;
					return null == e ? null : t && void 0 !== this.voteState ? e - Object(D.e)(t) + this.voteState : e
				}
				componentDidMount() {
					this.setVoteStateFromBroadcastProp()
				}
				componentDidUpdate(e) {
					const {
						id: t
					} = this.props.broadcast.post, s = t !== e.broadcast.post.id, a = this.state.voteStates.has(t);
					s && !a && this.setVoteStateFromBroadcastProp()
				}
				render() {
					const e = this.voteState === D.a.upvoted,
						t = this.voteState === D.a.downvoted;
					return n.a.createElement("div", {
						className: U.a.votePanel
					}, n.a.createElement(le, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? n.a.createElement(de, {
						score: this.score
					}) : null, n.a.createElement(ie, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(D.e)(t))
				}
				setVoteState(e, t) {
					const {
						voteStates: s
					} = this.state;
					if (!s.has(e) || s.get(e) !== t) {
						const a = new Map(s);
						a.set(e, t), this.setState({
							voteStates: a
						})
					}
				}
				toggleVoteState(e) {
					return e === this.voteState ? D.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						onUpvote: s,
						onDownvote: a
					} = this.props, {
						id: n
					} = t.post;
					this.setVoteState(n, e), this.props.vote(n, e), e === D.a.upvoted ? s() : e === D.a.downvoted && a()
				}
			}), le = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return n.a.createElement("button", {
					className: Object(o.a)(U.a.voteButton, U.a.upVoteButton, {
						[U.a.voted]: s
					}),
					onClick: t,
					value: "upvote",
					"aria-label": H._("Upvote", null, {
						hk: "Ufd6r"
					})
				}, n.a.createElement(y.b, {
					className: U.a.voteIcon
				}))
			}, ie = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return n.a.createElement("button", {
					className: Object(o.a)(U.a.voteButton, U.a.downVoteButton, {
						[U.a.voted]: s
					}),
					onClick: t,
					value: "downvote",
					"aria-label": H._("Downvote", null, {
						hk: "ZDRA3"
					})
				}, n.a.createElement(N.a, {
					className: U.a.voteIcon
				}))
			}, de = e => {
				let {
					score: t
				} = e;
				return n.a.createElement("div", {
					className: U.a.score
				}, Object(i.b)(t))
			}, me = e => {
				let {
					children: t
				} = e;
				return n.a.createElement("div", {
					className: U.a.prompt
				}, t)
			}, ue = () => n.a.createElement(me, null, H._("Connection issues", null, {
				hk: "hIrnJ"
			})), pe = () => n.a.createElement(me, null, H._("Tuning...", null, {
				hk: "3dG7Ks"
			})), he = () => n.a.createElement(me, null, H._("Broadcast paused", null, {
				hk: "jxvku"
			})), Ce = e => {
				let {
					onClickCrosspost: t,
					onClickReplay: s,
					onClickShare: a
				} = e;
				return n.a.createElement(me, null, n.a.createElement("div", {
					className: U.a.promptButtonSet
				}, n.a.createElement(Z.e, {
					onClick: s
				}), n.a.createElement(Z.f, {
					onClick: a
				}), n.a.createElement(Z.d, {
					onClick: t
				})))
			}, ve = e => {
				let {
					onClickAward: t
				} = e;
				return n.a.createElement(me, null, n.a.createElement("div", {
					className: U.a.awardPromptWrapper
				}, n.a.createElement("div", {
					className: U.a.awardPromptLabel
				}, H._("Award this broadcast to give it more airtime", null, {
					hk: "20jmEz"
				})), n.a.createElement(Z.a, {
					onClick: t
				})))
			}, xe = e => {
				if (!e) return !1;
				const {
					id: t,
					name: s
				} = e;
				return !(!t || !s || "string" != typeof t || "string" != typeof s)
			}, be = e => {
				let {
					profile: t,
					currentStream: s,
					onSubscriptionChange: a
				} = e;
				const {
					name: r
				} = t, o = we(r), c = fe(r), l = _e(r, !c), i = c ? H._("Unfollow u/{name}", [H._param("name", r)], {
					hk: "2n0wqa"
				}) : H._("Follow u/{name}", [H._param("name", r)], {
					hk: "20X8Bw"
				}), d = n.a.createElement("button", {
					className: U.a.subscribeToProfileButton,
					onClick: () => {
						a(!c), l()
					},
					title: i
				}, n.a.createElement(Ee, {
					profile: t
				}), n.a.createElement(ge, {
					isSubscribed: c
				}));
				return o && o.enableFollowers ? d : null
			}, we = e => Object(r.e)(t => Object(p.Bb)(t, {
				userName: e
			})), fe = e => Object(r.e)(t => Object(F.kb)(t, {
				identifier: {
					name: e,
					type: w.a.PROFILE
				}
			})), _e = (e, t) => {
				const s = Object(r.d)();
				return Object(a.useCallback)(() => {
					s(Object(C.d)([{
						name: e,
						type: w.a.PROFILE
					}], t))
				}, [s, e, t])
			}, Ee = e => {
				let {
					profile: t
				} = e;
				const {
					id: s,
					name: a
				} = t, r = we(a), c = Ie(r), l = c && Object(g.a)(r.accountIcon);
				return n.a.createElement("div", {
					className: Object(o.a)(U.a.subscribeToProfileAvatar, {
						[U.a.snoovatarHeadshot]: l
					})
				}, r ? c ? l ? n.a.createElement(b.a, {
					headshot: r.accountIcon
				}) : n.a.createElement("img", {
					src: r.accountIcon
				}) : n.a.createElement(v.a, {
					userId: s
				}) : null)
			}, ge = e => {
				let {
					isSubscribed: t
				} = e;
				return n.a.createElement("div", {
					className: Object(o.a)(U.a.subscribeToProfileStatus, {
						[U.a.isSubscribed]: t
					})
				}, t ? n.a.createElement(ke, null) : n.a.createElement(Ne, null))
			}, ke = () => n.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), Ne = () => n.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), Ie = e => {
				const t = Object(r.e)(p.l),
					s = Object(r.e)(p.G),
					a = Object(r.e)(p.lb);
				return !!e && (!!e.accountIcon && (!!t && (t.id === e.id || (!e.isNSFW || !!a && !s))))
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(a.a)(e).banner.iconImage ? String(Object(a.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("share", e.isFilled), l.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, n.a.createElement("g", {
				stroke: "none"
			}, n.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			const r = e => n.a.createElement("svg", {
					className: e.className,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5.00001 13.41C4.91441 13.4079 4.82982 13.391 4.75001 13.36C4.36493 13.225 3.99331 13.0542 3.64001 12.85L1.53001 13.37C1.4053 13.4019 1.27448 13.4012 1.15014 13.3679C1.02579 13.3347 0.912098 13.27 0.820006 13.18C0.729222 13.0864 0.664059 12.971 0.630783 12.8449C0.597508 12.7188 0.59724 12.5862 0.630006 12.46L1.15001 10.36C0.684603 9.54657 0.393688 8.64513 0.295784 7.71309C0.197881 6.78105 0.295135 5.83883 0.581353 4.94644C0.867572 4.05404 1.33648 3.23103 1.95823 2.5298C2.57997 1.82857 3.34092 1.2645 4.19263 0.873491C5.04433 0.482487 5.96813 0.273123 6.90519 0.258731C7.84225 0.244338 8.77204 0.425233 9.63535 0.789896C10.4987 1.15456 11.2766 1.695 11.9196 2.3768C12.5626 3.05861 13.0565 3.86683 13.37 4.75001C13.4032 4.83336 13.4213 4.92181 13.4236 5.01127C13.0459 4.9912 12.6656 4.99785 12.2855 5.03189C10.5542 5.18694 8.92053 5.90165 7.6316 7.06789C6.34267 8.23414 5.46866 9.78846 5.1418 11.4957C5.02032 12.1302 4.97688 12.773 5.00962 13.4104L5.00001 13.41ZM13 19.75C11.8204 19.7506 10.6615 19.4401 9.64004 18.85L7.53004 19.37C7.40533 19.4019 7.27451 19.4012 7.15017 19.3679C7.02582 19.3347 6.91213 19.2699 6.82004 19.18C6.72925 19.0864 6.66409 18.971 6.63081 18.8449C6.59754 18.7188 6.59727 18.5862 6.63004 18.46L7.15004 16.36C6.41066 15.0718 6.11686 13.5756 6.31416 12.1034C6.51145 10.6312 7.18884 9.26522 8.24132 8.21711C9.29381 7.169 10.6626 6.49731 12.1356 6.30615C13.6086 6.11498 15.1035 6.41502 16.3887 7.15975C17.6739 7.90448 18.6775 9.05233 19.244 10.4254C19.8106 11.7984 19.9084 13.32 19.5224 14.7543C19.1363 16.1886 18.288 17.4556 17.1088 18.3588C15.9296 19.2619 14.4854 19.751 13 19.75Z",
					fill: "inherit"
				})),
				o = e => n.a.createElement("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "inherit",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, n.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.426 16.3838C11.243 16.3088 11.0765 16.1978 10.9385 16.0598L6.43867 11.56C5.85369 10.9751 5.85369 10.0256 6.43867 9.43912C7.02515 8.85414 7.97461 8.85414 8.56108 9.43912L10.5005 11.3785V1.49994C10.5005 0.671973 11.171 0 12.0004 0C12.8284 0 13.5004 0.671973 13.5004 1.49994V11.3785L15.4383 9.43912C16.0248 8.85414 16.9742 8.85414 17.5607 9.43912C18.1457 10.0256 18.1457 10.9751 17.5607 11.56L13.0609 16.0598C12.9229 16.1978 12.7564 16.3088 12.5734 16.3838C12.3889 16.4603 12.1954 16.4993 12.0004 16.4993C11.804 16.4993 11.6105 16.4603 11.426 16.3838ZM20.9991 15.0003C20.9991 14.1724 21.6711 13.5004 22.4991 13.5004C23.3271 13.5004 23.999 14.1724 23.999 15.0003V19.5002C23.999 21.9811 21.9801 24 19.4992 24H4.49982C2.01892 24 0 21.9811 0 19.5002V15.0003C0 14.1724 0.671973 13.5004 1.49994 13.5004C2.32791 13.5004 2.99988 14.1724 2.99988 15.0003V19.5002C2.99988 20.3266 3.67335 21.0001 4.49982 21.0001H19.4992C20.3257 21.0001 20.9991 20.3266 20.9991 19.5002V15.0003Z",
					fill: "inherit"
				})),
				c = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M5,3.723h9v-2H5a3,3,0,0,0-3,3H4A1,1,0,0,1,5,3.723Z"
				}), n.a.createElement("path", {
					d: "M19.294,7.429A1.116,1.116,0,0,0,18.5,7.1h-.009l-2.345.018a1.117,1.117,0,0,0-.613.185h0L13.626,8.562V7.223A1.127,1.127,0,0,0,12.5,6.1H1.5A1.127,1.127,0,0,0,.376,7.223v3.494a8.5,8.5,0,0,1,7.652,7.631H12.5a1.127,1.127,0,0,0,1.125-1.125V15.884l1.91,1.26a1.145,1.145,0,0,0,.609.184l2.347.016H18.5a1.125,1.125,0,0,0,1.125-1.125V8.226A1.116,1.116,0,0,0,19.294,7.429Z"
				}), n.a.createElement("path", {
					d: "M.374,14.764v1.29a3.221,3.221,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.764Z"
				}), n.a.createElement("path", {
					d: "M.374,12.1v1.275a5.857,5.857,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,12.1Z"
				})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				transform: "translate(3, 4)"
			}, n.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/icons/svgs/VideoShare/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "fpaVW-I8iox1soX0hTuwb"
			}
		},
		"./src/reddit/icons/svgs/VideoShare/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				c = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 64 64",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("circle", {
				cx: "32",
				cy: "32",
				r: "30.72",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "2.4576"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/VideoShareModal.df7016b69305d0e351fa.js.map