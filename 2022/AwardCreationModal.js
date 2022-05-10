// https://www.redditstatic.com/desktop2x/AwardCreationModal.4cd56ec33922cc5f629c.js
// Retrieved at 5/10/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AwardCreationModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./src/lib/currency/cleanNumber/index.ts");

			function s(e, t) {
				const a = Object(n.a)(e),
					s = parseInt(a) / 100;
				return Math.floor(s) !== s || t ? s.toFixed(2) : String(s)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			a.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return r
			})), a.d(t, "d", (function() {
				return o
			})), a.d(t, "a", (function() {
				return i
			})), a.d(t, "f", (function() {
				return l
			})), a.d(t, "g", (function() {
				return c
			})), a.d(t, "e", (function() {
				return d
			}));
			var n, s = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const r = "USD",
				o = "ETH",
				i = "COINS",
				l = [o, "BTC"],
				c = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				d = {
					COINS: () => s.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => s.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => s.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return d
			}));
			var n = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = a("./src/lib/currency/centsToDollars/index.ts"),
				r = a("./src/lib/currency/currencies.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/helpers/governance/tokens.ts"),
				l = a("./src/reddit/constants/intlSupport.ts");
			const c = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: s
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const r = Number(e);
					return Object(l.c)() ? a ? Object(o.b)(r) : new Intl.NumberFormat(t, s).format(r) : m(r, a, t)
				},
				d = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: a = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: c,
						displayConversion: d,
						forceDecimals: p,
						currency: g = t.currency || (t.type ? h(t.type) : r.c),
						type: b = t.type || (t.currency ? u(t.currency) : r.b.Real)
					} = t, C = Number(e), f = String(e);
					switch (b) {
						case r.b.Reddit: {
							const e = r.e[g],
								t = e ? e() : g;
							return Object(l.c)() ? new Intl.NumberFormat(a, {
								currencyDisplay: "symbol",
								...c
							}).format(C) + " " + t : m(C, o, a, t)
						}
						case r.b.Crypto: {
							if (o) {
								return Object(i.d)(f, d) + " " + g
							}
							const e = Number(Object(i.c)(f, d));
							return Object(l.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...c
							}).format(e) : m(e, o, a, g)
						}
						case r.b.Real:
						default: {
							const e = Number(Object(s.a)(f, p));
							return Object(l.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...c
							}).format(e) : m(e, o, a, g)
						}
					}
				},
				m = (e, t, a, n) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(a)) + (n ? " " + n : "")
				},
				u = e => r.g.includes(e.toUpperCase()) ? r.b.Reddit : r.f.includes(e.toUpperCase()) ? r.b.Crypto : r.b.Real,
				h = e => {
					switch (e) {
						case r.b.Crypto:
							return r.d;
						case r.b.Reddit:
							return r.a;
						case r.b.Real:
						default:
							return r.c
					}
				}
		},
		"./src/reddit/components/AwardCreationModal/AwardImagePreview/index.m.less": function(e, t, a) {
			e.exports = {
				previewComponent: "_2N7AHaslp4fm4xx0vdsKcr",
				preview: "_69KS5WnKmEsRj0C8zqItT",
				previewLast: "_2sW96thTjDuY55x-rAKXIs",
				previewImg: "_3lAuMfEzhEPD_Xf_L3ta8O",
				largeSizeImg: "_3QEbAdB2Wli-v5WJu_Mza0",
				normalSizeImg: "D6A_FC2A2y0aQw05qRxFw",
				smallSizeImg: "CqhZNomhcS2uqI-6sDOXM",
				removeBtn: "_32GF98NFnAAyhuqUYcowpN"
			}
		},
		"./src/reddit/components/AwardCreationModal/AwardImageUploader/index.m.less": function(e, t, a) {
			e.exports = {
				imageUploader: "_1bUFC3QOX8o9-ltmswQiA-",
				invalid: "_2waN20LyqlF3jwxteepU5",
				fileDrop: "_1qnkaC2-8BD2PFV6is_dKV",
				fileDropContent: "_2Ua2i9qbqiDKYFBsKhn2sF",
				fileIsOver: "_2Cif1XD0T9u-bycw9AudlW",
				uploadIconContainer: "_1bpN-UtnomxKOxKCP1qsIA",
				uploadIcon: "CJJKBMig3ruX_mxvPvP7H",
				uploadLabel: "_3-8MwaL0MyOr_cPCdA2Gkc",
				imageInput: "_20B7rq34f3NDtUr_2MjpKr"
			}
		},
		"./src/reddit/components/AwardCreationModal/index.m.less": function(e, t, a) {
			e.exports = {
				communityAwardCreationModal: "JMqXV5p2Vt50RT0nucoeZ",
				formSection: "_2ShT7hnK4Duq9cC8qzFCV3",
				formLabelText: "_3IwdAzNCCFDkDFlB3-eGrb",
				formSubtext: "_2vndi6N8casI-W0JjNmRlD",
				modToggleSection: "_286aFJ3b39oydY-H2sxdpw",
				modToggle: "_1HKHhrmlCE2HkcWIUToEW5",
				modToggleLabelText: "_1_LnRw7S3DWCneOTxotrT1",
				errorText: "_3V1Kw5LTo6zuoDzIyBzSq4",
				nameInput: "_7en7UtWrOkPS7TaGFNriz",
				timeInput: "_3jDrmvUNS8V8TL0MqSgjnY",
				dateInput: "_3CMZLYDnST_8QJ_PdpfDEX",
				timezoneInput: "_D_L3yUewQrGO8b_ubiIB",
				timezoneDiv: "_3YW5wJSISOLPGM-Kj5y_Pp",
				globalLabelText: "_2UoEG6hxORiUxOd4R114uv",
				createBtn: "_3kT9HbAKeIYVfH230IL9Dm",
				coinInput: "kMvIrN2_A3Sr-gBZ65sZM"
			}
		},
		"./src/reddit/components/AwardCreationModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/contexts/ApiContext.tsx"),
				l = a("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				c = a("./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts"),
				d = a("./src/reddit/actions/gold/communityAwards/index.ts"),
				m = a("./src/reddit/selectors/communityAwards.ts"),
				u = a("./src/reddit/helpers/trackers/communityAwards.ts"),
				h = a("./src/reddit/components/TrackingHelper/index.tsx"),
				p = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/fbt/lib/FbtPublic.js")),
				g = a("./src/reddit/components/AwardCreationModal/index.m.less"),
				b = a.n(g),
				C = a("./src/higherOrderComponents/asModal/index.tsx"),
				f = a("./src/lib/classNames/index.ts"),
				E = a("./src/lib/localizeCurrency/index.ts"),
				w = a("./src/reddit/constants/colors.ts"),
				y = a("./src/reddit/constants/gold.ts"),
				v = a("./src/reddit/constants/keycodes.ts"),
				I = a("./src/reddit/models/Gold/Award.ts"),
				T = a("./src/reddit/models/Gold/Premium/index.ts"),
				x = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				S = a("./src/reddit/controls/DropdownSelector/index.tsx"),
				N = a("./src/reddit/controls/FormFields/index.tsx"),
				O = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				D = a("./src/reddit/controls/TextButton/index.tsx"),
				k = a("./src/reddit/controls/ToggleSwitch/index.tsx"),
				_ = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				P = a("./src/lib/currency/currencies.ts"),
				F = a("./src/lib/timezone/index.ts"),
				A = a("./src/reddit/models/PostCreationForm/index.ts"),
				M = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				j = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				U = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				R = a("./src/reddit/components/AwardCreationModal/AwardImagePreview/index.m.less"),
				L = a.n(R);
			const {
				fbt: z
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class B extends s.a.Component {
				render() {
					const {
						className: e,
						imageUrl: t,
						onRemove: a
					} = this.props;
					return s.a.createElement("div", {
						className: Object(f.a)(L.a.previewComponent, e)
					}, s.a.createElement("div", {
						className: L.a.preview
					}, s.a.createElement("div", {
						className: Object(f.a)(L.a.previewImg, L.a.largeSizeImg),
						style: {
							backgroundImage: `url(${t})`
						}
					}), s.a.createElement("span", null, z._("Large", null, {
						hk: "1frk2C"
					}))), s.a.createElement("div", {
						className: L.a.preview
					}, s.a.createElement("div", {
						className: Object(f.a)(L.a.previewImg, L.a.normalSizeImg),
						style: {
							backgroundImage: `url(${t})`
						}
					}), s.a.createElement("span", null, z._("Normal", null, {
						hk: "337tns"
					}))), s.a.createElement("div", {
						className: Object(f.a)(L.a.preview, L.a.previewLast)
					}, s.a.createElement("div", {
						className: Object(f.a)(L.a.previewImg, L.a.smallSizeImg),
						style: {
							backgroundImage: `url(${t})`
						}
					}), s.a.createElement("span", null, z._("Small", null, {
						hk: "1g2eZA"
					}))), s.a.createElement("button", {
						className: L.a.removeBtn,
						onClick: a
					}, z._("remove", null, {
						hk: "4zKN1U"
					})))
				}
			}
			var W = B,
				V = a("./src/reddit/models/Image/index.tsx"),
				H = a("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				K = a("./src/reddit/controls/FileDrop/index.tsx"),
				G = a("./src/reddit/controls/ImageInput/index.tsx"),
				q = a("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				X = a("./src/reddit/components/AwardCreationModal/AwardImageUploader/index.m.less"),
				Y = a.n(X);
			const {
				fbt: J
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class Z extends s.a.Component {
				constructor() {
					super(...arguments), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.handleLabelKeydown = e => {
						e.keyCode === v.a.Enter && this.inputRef && (e.preventDefault(), this.inputRef.click())
					}
				}
				render() {
					const {
						className: e,
						id: t,
						isUploading: a,
						name: n,
						onChange: r
					} = this.props;
					return a ? s.a.createElement(H.a, {
						className: e
					}) : s.a.createElement(K.a, {
						className: Object(f.a)(e, Y.a.fileDrop),
						onDrop: r,
						render: e => s.a.createElement("label", {
							className: Object(f.a)(Y.a.fileDropContent, e && Y.a.fileIsOver || ""),
							onKeyDown: this.handleLabelKeydown,
							tabIndex: 0
						}, s.a.createElement("div", {
							className: Y.a.uploadIconContainer
						}, s.a.createElement(q.a, {
							className: Y.a.uploadIcon
						})), s.a.createElement("div", {
							className: Y.a.uploadLabel
						}, J._("Drag and Drop or Upload Image", null, {
							hk: "133Ytg"
						})), s.a.createElement(G.a, {
							className: Y.a.imageInput,
							inputId: t,
							inputRef: this.setInputRef,
							name: n,
							onChange: r,
							multiple: !1
						}))
					})
				}
			}
			var Q = Z;
			class $ extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imageUploadInProgress: !1
					}, this.handleImageUpload = async e => {
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e;
						if (!t) return;
						const {
							maxSizeBytes: a,
							maxHeight: n,
							minHeight: s,
							maxWidth: r,
							minWidth: o,
							shouldBeEqualDimensions: i,
							onImageChange: l
						} = this.props;
						this.setState({
							imageUploadInProgress: !0
						});
						const c = await Object(V.e)(t);
						if (a && c.file.size > a) {
							const e = p.fbt._("The chosen image file is too large. Please pick a new image and try again.", null, {
								hk: "2LwR6S"
							});
							setTimeout(() => this.handleImageUploadFailed(e), 1e3)
						} else if (i && c.height !== c.width) {
							const e = p.fbt._("The chosen image is not square. Please pick a new image and try again.", null, {
								hk: "2WG1Xo"
							});
							setTimeout(() => this.handleImageUploadFailed(e), 1e3)
						} else if (s && c.height < s || o && c.width < o) {
							const e = p.fbt._("The chosen image does not match the required dimensions. Please pick a new image and try again.", null, {
								hk: "3D0IW1"
							});
							setTimeout(() => this.handleImageUploadFailed(e), 1e3)
						} else if (c.height > n || c.width > r) {
							const e = r.toString(),
								t = n.toString(),
								a = p.fbt._("Image should be less than or equal to {maxWidth}x{maxHeight}. Please pick a new image and try again.", [p.fbt._param("maxWidth", e), p.fbt._param("maxHeight", t)], {
									hk: "2GDxkX"
								});
							setTimeout(() => this.handleImageUploadFailed(a), 1e3)
						} else await l(c), this.setState({
							imageUploadInProgress: !1
						})
					}
				}
				getImageKey() {
					return `COMMUNITY_AWARD_${this.props.subredditId}`
				}
				handleImageUploadFailed(e) {
					this.props.onImageUploadFailed(e), this.setState({
						imageUploadInProgress: !1
					})
				}
				render() {
					const {
						className: e,
						id: t,
						isValid: a,
						name: n
					} = this.props, {
						imageUploadInProgress: r
					} = this.state, o = !1 === a ? Y.a.invalid : "";
					return s.a.createElement("div", {
						className: Object(f.a)(e, Y.a.imageUploader, o)
					}, s.a.createElement(Q, {
						id: t,
						isUploading: r,
						name: n,
						onChange: this.handleImageUpload
					}))
				}
			}
			var ee, te = $,
				ae = a("./src/lib/sentry/index.ts"),
				ne = a("./src/reddit/helpers/media/index.ts"),
				se = a("./src/reddit/endpoints/gold/communityAwards.ts");
			! function(e) {
				e.BadResponse = "BadResponse", e.CancelledError = "ConnectionCancelled", e.CommunicationError = "CommunicationError", e.ConnectionError = "ConnectionError", e.TimeoutError = "TimeoutError"
			}(ee || (ee = {}));
			const re = new Error("CommunityAwardImageUpload: Failed to connect to websocket.");
			re.name = ee.CommunicationError;
			const oe = new Error("CommunityAwardImageUpload: WebSocket connection failed before all messages received.");
			oe.name = ee.CommunicationError;
			const ie = new Error("CommunityAwardImageUpload: Client websocket timed out.");
			ie.name = ee.TimeoutError;
			const le = new Error("CommunityAwardImageUpload: The websocket returned a bad response.");
			le.name = ee.BadResponse;
			const ce = new Error("CommunityAwardImageUpload: The websocket connection was cancelled.");
			ce.name = ee.CancelledError;
			const de = p.fbt._("There was an error uploading the image. Please try again.", null, {
					hk: "dWlrv"
				}),
				me = e => new Promise(t => {
					let a = null,
						n = null;
					const s = setTimeout((function() {
						a = ie, ae.c.captureException(a), e.close()
					}), 6e4);
					e.onerror = t => {
						a = oe, ae.c.captureException(a), e.close()
					}, e.onclose = e => (clearTimeout(s), t(n ? {
						ok: !0,
						award: n
					} : {
						ok: !1,
						error: a || ce
					})), e.onmessage = t => {
						const s = JSON.parse(t.data);
						"success" !== s.type ? a = le : n = s.payload, e.close()
					}
				}),
				ue = async (e, t, a) => {
					const n = await Object(ne.h)(t.file) || t.file.type,
						s = await Object(se.d)(e(), a, t.file.name, n);
					if (!s.ok) {
						const e = new Error(`Error creating S3 lease for award: ${s.error&&s.error.type}`);
						return ae.c.captureException(e), {
							ok: !1,
							error: new Error(de)
						}
					}
					const {
						websocketUrl: r,
						s3UploadLease: o
					} = s.body, i = await (e => new Promise((t, a) => {
						const n = new WebSocket(e);
						n.onopen = e => {
							n.onerror = null, t(n)
						}, n.onerror = e => {
							n.close();
							const a = re;
							ae.c.captureException(a), t()
						}
					}))(r);
					return i ? {
						ok: !0,
						s3UploadLease: o,
						websocket: i
					} : {
						ok: !1,
						error: new Error(de)
					}
				}, he = async (e, t) => {
					const a = await Object(se.n)(e, t.file);
					if (!a.ok) {
						const e = new Error(`Error uploading award imagine to S3 temp bucket: ${a.error&&a.error.type}`);
						return ae.c.captureException(e), {
							ok: !1,
							error: new Error(de)
						}
					}
					const n = a.body;
					return {
						ok: !0,
						imageUrl: decodeURIComponent(n.PostResponse.Location)
					}
				};
			var pe = a("./src/reddit/hooks/useLocale.ts");
			var ge = e => {
				let {
					num: t,
					className: a,
					...n
				} = e;
				const r = Object(pe.a)(),
					o = Object(E.b)(t, {
						locale: r,
						...n
					});
				return s.a.createElement("span", {
					className: a
				}, o)
			};
			const be = "CommunityAwardCreationModalImageInput",
				Ce = 15,
				fe = 30,
				Ee = 2097152,
				we = 512,
				ye = 512,
				ve = 2048,
				Ie = 2048,
				Te = 500,
				xe = e => {
					const t = e || 0;
					return t >= y.f ? t * y.h : t * y.c
				},
				Se = e => {
					const t = e || 0;
					return t >= y.f ? t * y.i : 0
				},
				Ne = e => e.slice(0, 5),
				Oe = (e, t) => `${e}T${Ne(t)}:00`,
				De = e => {
					const [t, a] = e.split("T");
					return [t, Ne(a)]
				},
				ke = () => {
					const e = new Date,
						t = Object(F.g)(e);
					return e.setMinutes(e.getMinutes() + 1440), {
						startDate: t,
						endDate: Object(F.g)(e),
						submitTime: A.j.Now,
						timezoneName: Object(F.b)() || F.a
					}
				};
			class _e extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						e.keyCode === v.a.Escape && this.props.onTryCloseModal()
					}, this.handleChooseImage = async e => {
						const {
							apiContext: t,
							subredditId: a
						} = this.props;
						this.imageDraft = e;
						const n = (new Date).getTime();
						this.setState({
							imageError: void 0,
							imageHeight: e.height,
							imageWidth: e.width
						});
						const s = await ue(t, e, a);
						if (!s.ok) return this.handleImageUploadError(s.error.message), void this.sendUploadImageEvent(void 0, e, (new Date).getTime() - n, s.error.message);
						const {
							s3UploadLease: r,
							websocket: o
						} = s;
						this.setState({
							websocket: o
						});
						const i = await he(r, e);
						if (!i.ok) return this.handleImageUploadError(i.error.message), void this.sendUploadImageEvent(void 0, e, (new Date).getTime() - n, i.error.message);
						const {
							imageUrl: l
						} = i;
						this.setState({
							imageUrl: l
						}), this.sendUploadImageEvent(l, e, (new Date).getTime() - n)
					}, this.handleImageRemoval = () => {
						this.cancelExistingWebsockets(), this.setState({
							imageUrl: void 0
						}), this.props.sendEvent(Object(u.d)("remove", "image"))
					}, this.handleImageUploadError = e => {
						this.cancelExistingWebsockets(), this.setState({
							imageError: e,
							imageUrl: void 0
						})
					}, this.handleNameChange = e => {
						this.setState({
							nameValue: e.target.value
						})
					}, this.handleNameFocus = e => {
						this.props.sendEvent(Object(u.d)("click", "name_input"))
					}, this.handleNameBlur = e => {
						this.props.sendEvent(Object(u.d)("type", "name_input"))
					}, this.handleModOnlyChange = () => {
						const e = !this.state.isModOnly;
						this.setState({
							isModOnly: e
						}), this.props.sendEvent(Object(u.c)(e ? "check" : "uncheck", "mod_award", {
							defaultOption: e ? T.a.PREMIUM_1_MONTH.priceInCoins : this.defaultCostOptionValue
						}))
					}, this.handleCostChange = e => {
						const t = e.value;
						this.setState({
							costValue: t
						})
					}, this.handleIsTemporaryChange = () => {
						const e = !this.state.isTemporary;
						this.setState({
							isTemporary: e
						})
					}, this.onCostInputOpen = () => {
						this.props.sendEvent(Object(u.d)("click", "coin_cost_input"))
					}, this.getCostDropdownMenuItems = () => {
						return Object(I.k)(this.props.awards).map(e => ({
							displayText: Object(E.b)(e, {
								type: P.b.Reddit,
								currency: P.a
							}),
							value: e
						}))
					}, this.handlePackageDropdownOpen = () => {
						this.props.sendEvent(Object(u.d)("open", "mod_award_months"))
					}, this.handlePremiumAmountChange = e => {
						const t = e.value;
						this.setState({
							selectedPackage: t
						}), this.props.sendEvent(Object(u.c)("click", "mod_award_months", {
							numberMonths: t.monthsOfPremium,
							numberCoins: t.priceInCoins
						}))
					}, this.handleSubmit = async e => {
						e.preventDefault();
						const {
							onCreateCommunityAward: t,
							onCreateModAward: a,
							onCreateAwardFailed: n,
							onCreateAwardSuccess: s
						} = this.props, {
							costValue: r,
							imageUrl: o,
							imageWidth: i,
							imageHeight: l,
							isModOnly: c,
							isTemporary: d,
							startDate: m,
							startTime: h,
							endDate: g,
							endTime: b,
							nameValue: C,
							selectedPackage: f,
							websocket: E
						} = this.state;
						if (!(o && C && r && E)) return;
						if (E.readyState !== E.OPEN) {
							return this.handleImageRemoval(), void n(p.fbt._("There was an error creating the award. Please try again.", null, {
								hk: "1pkgpd"
							}))
						}
						const w = me(E),
							y = Object(F.f)(Oe(m, h)),
							v = Object(F.f)(Oe(g, b));
						y.setTime(y.getTime()), v.setTime(v.getTime());
						const I = d ? y.toISOString() : void 0,
							T = d ? v.toISOString() : void 0;
						c ? await a(C, o, i, l, f.monthsOfPremium, I, T) : await t(C, o, i, l, r, I, T);
						const x = await w;
						if (!x.ok) {
							return this.handleImageRemoval(), void n(p.fbt._("There was an error creating the award. Please try again.", null, {
								hk: "1pkgpd"
							}))
						}
						const S = x.award;
						S.awardType = S.awardType.toUpperCase(), s(S), this.props.sendEvent(Object(u.b)(this.state.imageUrl, this.imageDraft, S))
					}, this.onStartDateChange = e => {
						this.setState({
							startDate: e
						})
					}, this.onStartTimeChange = e => {
						this.setState({
							startTime: e
						})
					}, this.onEndDateChange = e => {
						this.setState({
							endDate: e
						})
					}, this.onEndTimeChange = e => {
						this.setState({
							endTime: e
						})
					}, this.onTimezoneChange = e => {
						this.setState({
							timezoneName: e
						})
					};
					const t = ke(),
						[a, n] = De(t.startDate),
						[s, r] = De(t.endDate);
					this.imageDraft = null, this.costOptions = this.getCostDropdownMenuItems(), this.defaultCostOptionValue = this.costOptions.length ? this.costOptions[0].value : Te, this.state = {
						costValue: e.defaultCoinPrice ? e.defaultCoinPrice : this.defaultCostOptionValue,
						imageError: void 0,
						imageUrl: void 0,
						imageWidth: 0,
						imageHeight: 0,
						isModOnly: e.defaultModOnly || 0 === this.costOptions.length,
						isTemporary: !1,
						startDate: a,
						startTime: n,
						endDate: s,
						endTime: r,
						timezoneName: t.timezoneName,
						nameValue: "",
						websocket: null,
						selectedPackage: T.a.PREMIUM_1_MONTH
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey), this.cancelExistingWebsockets()
				}
				componentDidMount() {
					this.props.sendEvent(Object(u.c)("view", "page", {
						defaultOption: this.state.isModOnly ? T.a.PREMIUM_1_MONTH.priceInCoins : this.props.defaultCoinPrice ? this.props.defaultCoinPrice : this.defaultCostOptionValue
					})), document.addEventListener("keydown", this.handleEscapeKey)
				}
				sendUploadImageEvent(e, t, a, n) {
					const s = (new Date).getTime();
					this.props.sendEvent(Object(u.f)(e, t, s - a, n))
				}
				cancelExistingWebsockets() {
					const {
						websocket: e
					} = this.state;
					e && (e.close(), this.setState({
						websocket: null
					}))
				}
				getModCostDropdownMenuItems() {
					return Object.keys(T.a).map(e => {
						const t = T.a[e];
						return {
							displayText: Object(T.e)(t),
							value: t
						}
					})
				}
				getAwardSubTypeDropdownMenuItems() {
					return Object.keys(I.d).map(e => {
						const t = I.d[e];
						return {
							displayText: t,
							value: t
						}
					})
				}
				timeInputsAreValid() {
					const {
						endDate: e,
						endTime: t,
						startDate: a,
						startTime: n,
						isTemporary: s
					} = this.state;
					if (!1 === s) return !0;
					if (!(a && n && e && t)) return !1;
					const r = Object(F.f)(Oe(a, n));
					return !(Object(F.f)(Oe(e, t)) < r)
				}
				inputsAreValid() {
					const {
						costValue: e,
						imageUrl: t,
						isModOnly: a,
						nameValue: n
					} = this.state;
					return !!(t && (e || a) && n && this.timeInputsAreValid())
				}
				render() {
					const {
						awards: e,
						className: t,
						onTryCloseModal: a,
						isPending: n,
						subredditId: r,
						isEligibleForTemporaryAwards: o
					} = this.props, {
						imageError: i,
						imageUrl: l,
						isModOnly: c,
						isTemporary: d,
						nameValue: m
					} = this.state, u = e.filter(e => e.awardType === I.f.Moderator);
					return s.a.createElement("section", {
						className: Object(f.a)(t, b.a.communityAwardCreationModal)
					}, s.a.createElement(x.i, null, s.a.createElement(_.a, null, s.a.createElement(x.q, null, p.fbt._("Create Award", null, {
						hk: "JQtjM"
					})), s.a.createElement(D.a, {
						onClick: a,
						disabled: n
					}, s.a.createElement(x.b, null)))), s.a.createElement("form", null, s.a.createElement(x.l, null, s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Name", null, {
						hk: "3PlUgw"
					})), s.a.createElement(N.b, {
						className: b.a.nameInput,
						maxLength: fe,
						name: "awardName",
						onFocus: this.handleNameFocus,
						onBlur: this.handleNameBlur,
						onChange: this.handleNameChange,
						placeholder: p.fbt._("Name of Award", null, {
							hk: "2Z5bIH"
						}),
						type: "text",
						value: m
					})), s.a.createElement("div", {
						className: b.a.formSubtext
					}, fe - m.length)), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", {
						className: b.a.formLabelText,
						htmlFor: be
					}, p.fbt._("Image", null, {
						hk: "2XS0KR"
					})), l ? s.a.createElement(W, {
						imageUrl: l,
						onRemove: this.handleImageRemoval
					}) : s.a.createElement(s.a.Fragment, null, s.a.createElement(te, {
						id: be,
						minHeight: we,
						minWidth: ye,
						maxHeight: ve,
						maxWidth: Ie,
						maxSizeBytes: Ee,
						name: "awardImage",
						onImageChange: this.handleChooseImage,
						onImageUploadFailed: e => {
							this.handleImageUploadError(e), this.sendUploadImageEvent(void 0, null, 0, e)
						},
						shouldBeEqualDimensions: !0,
						subredditId: r
					}), i && s.a.createElement("div", {
						className: b.a.errorText
					}, i), s.a.createElement("div", {
						className: b.a.formSubtext
					}, s.a.createElement("span", null, p.fbt._("Width and height should be equal, and at least {minImageSize}px", [p.fbt._param("minImageSize", ye)], {
						hk: "2A77pK"
					})), s.a.createElement("span", null, p.fbt._("File size limited to {maxImageFileSize}MB", [p.fbt._param("maxImageFileSize", Ee / 1048576)], {
						hk: "2iX7Vn"
					}))))), u.length < y.e && s.a.createElement("div", {
						className: Object(f.a)(b.a.formSection, b.a.modToggleSection)
					}, s.a.createElement("label", null, 0 !== this.costOptions.length && s.a.createElement(k.a, {
						activeColorOverride: w.a.moderator,
						className: b.a.modToggle,
						on: c,
						onToggle: this.handleModOnlyChange
					}), s.a.createElement("span", {
						className: b.a.modToggleLabelText
					}, p.fbt._("Exclusive for Mods", null, {
						hk: "1d7p5V"
					})))), this.renderCostDropdown(), o && s.a.createElement("div", {
						className: Object(f.a)(b.a.formSection, b.a.modToggleSection)
					}, s.a.createElement("label", null, s.a.createElement(k.a, {
						activeColorOverride: w.a.moderator,
						className: b.a.modToggle,
						on: d,
						onToggle: this.handleIsTemporaryChange
					}), s.a.createElement("span", {
						className: b.a.modToggleLabelText
					}, p.fbt._("Make Award Temporary", null, {
						hk: "4GtfNs"
					})))), this.renderDatePicker()), s.a.createElement(x.g, null, s.a.createElement(x.a, {
						onClick: a,
						disabled: n
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(x.r, {
						className: b.a.createBtn,
						"data-redditstyle": !0,
						disabled: !this.inputsAreValid() || n,
						onClick: this.handleSubmit
					}, n ? s.a.createElement(O.a, {
						sizePx: Ce
					}) : p.fbt._("Create", null, {
						hk: "42PxFO"
					})))))
				}
				renderCostDropdown() {
					const {
						costValue: e,
						isModOnly: t,
						selectedPackage: a
					} = this.state;
					if (t) {
						const e = Object(T.e)(a);
						return s.a.createElement("div", {
							className: b.a.formSection
						}, s.a.createElement("label", null, s.a.createElement("span", {
							className: b.a.formLabelText
						}, p.fbt._("Months of Premium to give", null, {
							hk: "3aWnVL"
						})), s.a.createElement(S.b, {
							className: b.a.dropdownSelector,
							displayText: e,
							name: "monthsOfPremium",
							options: this.getModCostDropdownMenuItems(),
							onOpen: this.handlePackageDropdownOpen,
							onSelect: this.handlePremiumAmountChange
						})))
					}
					if (!this.costOptions.length) return null;
					const n = this.costOptions.length ? this.costOptions.find(t => t.value === e) : null,
						r = n ? n.displayText : p.fbt._("None", null, {
							hk: "xWR5E"
						}),
						o = xe(e),
						i = Se(e);
					return s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Coin cost", null, {
						hk: "1cOBVd"
					})), s.a.createElement(S.b, {
						className: b.a.dropdownSelector,
						displayText: r,
						name: "coinCost",
						options: this.costOptions,
						onOpen: this.onCostInputOpen,
						onSelect: this.handleCostChange
					})), s.a.createElement("div", {
						className: b.a.formSubtext
					}, s.a.createElement("span", null, i > 0 ? p.fbt._("{coins-to-community} will go to the community and {coins-to-recipient} will go to the recipient", [p.fbt._param("coins-to-community", s.a.createElement(ge, {
						num: o,
						type: P.b.Reddit,
						currency: P.a
					})), p.fbt._param("coins-to-recipient", s.a.createElement(ge, {
						num: i,
						type: P.b.Reddit,
						currency: P.a
					}))], {
						hk: "38ioof"
					}) : p.fbt._("{coins-to-community} will go to the community", [p.fbt._param("coins-to-community", s.a.createElement(ge, {
						num: o,
						type: P.b.Reddit,
						currency: P.a
					}))], {
						hk: "3qOS8e"
					}))))
				}
				renderDatePicker() {
					const {
						isTemporary: e
					} = this.state;
					return e ? s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement("fieldset", {
						className: b.a.dateInput
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Start Date and Time", null, {
						hk: "SAI4F"
					})), s.a.createElement(M.a, {
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), s.a.createElement(j.a, {
						className: b.a.timeInput,
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					})), s.a.createElement("fieldset", {
						className: b.a.dateInput
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("End Date and Time", null, {
						hk: "zCwiW"
					})), s.a.createElement(M.a, {
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), s.a.createElement(j.a, {
						className: b.a.timeInput,
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					}))), s.a.createElement("div", {
						className: b.a.timezoneDiv
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Time Zone", null, {
						hk: "3do32Y"
					})), s.a.createElement("fieldset", {
						className: b.a.timezoneInput
					}, s.a.createElement(U.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					})))) : null
				}
			}
			var Pe = Object(C.a)(_e),
				Fe = a("./src/reddit/controls/NumberInput/index.tsx");
			const Ae = "GlobalAwardCreationModalImageInput",
				Me = 15,
				je = 30,
				Ue = 2097152,
				Re = 512,
				Le = 512,
				ze = 2048,
				Be = 2048,
				We = 500,
				Ve = e => e.slice(0, 5),
				He = (e, t) => `${e}T${Ve(t)}:00`,
				Ke = e => {
					const [t, a] = e.split("T");
					return [t, Ve(a)]
				},
				Ge = () => {
					const e = new Date,
						t = Object(F.g)(e);
					return e.setMinutes(e.getMinutes() + 1440), {
						startDate: t,
						endDate: Object(F.g)(e),
						submitTime: A.j.Now,
						timezoneName: Object(F.b)() || F.a
					}
				};
			class qe extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						e.keyCode === v.a.Escape && this.props.onTryCloseModal()
					}, this.handleChooseImage = async e => {
						const {
							apiContext: t,
							subredditId: a
						} = this.props;
						this.imageDraft = e;
						const n = (new Date).getTime();
						this.setState({
							imageError: void 0,
							imageHeight: e.height,
							imageWidth: e.width
						});
						const s = await ue(t, e, a);
						if (!s.ok) return this.handleImageUploadError(s.error.message), void this.sendUploadImageEvent(void 0, e, (new Date).getTime() - n, s.error.message);
						const {
							s3UploadLease: r,
							websocket: o
						} = s;
						this.setState({
							websocket: o
						});
						const i = await he(r, e);
						if (!i.ok) return this.handleImageUploadError(i.error.message), void this.sendUploadImageEvent(void 0, e, (new Date).getTime() - n, i.error.message);
						const {
							imageUrl: l
						} = i;
						this.setState({
							imageUrl: l
						}), this.sendUploadImageEvent(l, e, (new Date).getTime() - n)
					}, this.handleImageRemoval = () => {
						this.cancelExistingWebsockets(), this.setState({
							imageUrl: void 0
						}), this.props.sendEvent(Object(u.d)("remove", "image"))
					}, this.handleImageUploadError = e => {
						this.cancelExistingWebsockets(), this.setState({
							imageError: e,
							imageUrl: void 0
						})
					}, this.handleNameChange = e => {
						this.setState({
							nameValue: e.target.value
						})
					}, this.handleDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.handleCostChange = e => {
						this.setState({
							costValue: e
						})
					}, this.handleIsTemporaryChange = () => {
						const e = !this.state.isTemporary;
						this.setState({
							isTemporary: e
						})
					}, this.handleIsNewChange = () => {
						const e = !this.state.isNew;
						this.setState({
							isNew: e
						})
					}, this.handleDaysOfDripExtensionChange = e => this.setState({
						daysOfDripExtension: e
					}), this.handleDaysOfPremiumChange = e => this.setState({
						daysOfPremium: e
					}), this.handleCoinRewardChange = e => this.setState({
						coinReward: e
					}), this.handleSubredditCoinRewardChange = e => this.setState({
						subredditCoinReward: e
					}), this.handlePennyDonateChange = e => this.setState({
						pennyDonate: e
					}), this.handlePennyPriceChange = e => this.setState({
						pennyPrice: e
					}), this.handleGiverCoinRewardChange = e => this.setState({
						giverCoinReward: e
					}), this.onCostInputOpen = () => {
						this.props.sendEvent(Object(u.d)("click", "coin_cost_input"))
					}, this.getIconFormatDropdownMenuItems = () => Object.keys(I.c).map(e => ({
						displayText: e,
						value: I.c[e]
					})), this.handleAwardSubTypeChange = e => {
						const t = e.value;
						this.setState({
							selectedAwardSubType: t
						})
					}, this.handleIconFormatChange = e => {
						const t = e.value;
						this.setState({
							selectedIconFormat: t
						})
					}, this.handleSubmit = async e => {
						e.preventDefault();
						const {
							onCreateGlobalAward: t,
							onCreateAwardFailed: a,
							onCreateAwardSuccess: n
						} = this.props, {
							coinReward: s,
							costValue: r,
							daysOfDripExtension: o,
							daysOfPremium: i,
							description: l,
							endDate: c,
							endTime: d,
							giverCoinReward: m,
							imageHeight: h,
							imageUrl: g,
							imageWidth: b,
							isNew: C,
							isTemporary: f,
							nameValue: E,
							pennyDonate: w,
							pennyPrice: y,
							selectedAwardSubType: v,
							selectedIconFormat: I,
							startDate: T,
							startTime: x,
							subredditCoinReward: S,
							websocket: N
						} = this.state;
						if (!(g && E && r && N)) return;
						if (N.readyState !== N.OPEN) {
							return this.handleImageRemoval(), void a(p.fbt._("There was an error creating the award. Please try again.", null, {
								hk: "1pkgpd"
							}))
						}
						const O = me(N),
							D = Object(F.f)(He(T, x)),
							k = Object(F.f)(He(c, d));
						D.setTime(D.getTime()), k.setTime(k.getTime());
						const _ = f ? D.toISOString() : void 0,
							P = f ? k.toISOString() : void 0;
						await t({
							awardName: E,
							awardSubType: v,
							coinCost: r,
							coinReward: s,
							daysOfDripExtension: o,
							daysOfPremium: i,
							description: l,
							giverCoinReward: m,
							endDate: P,
							iconFormat: I,
							imageHeight: h,
							imageUrl: g,
							imageWidth: b,
							isNew: C,
							pennyDonate: w,
							pennyPrice: y,
							startDate: _,
							subredditCoinReward: S
						});
						const A = await O;
						if (!A.ok) {
							return this.handleImageRemoval(), void a(p.fbt._("There was an error creating the award. Please try again.", null, {
								hk: "1pkgpd"
							}))
						}
						const M = A.award;
						M.awardType = M.awardType.toUpperCase(), n(M), this.props.sendEvent(Object(u.b)(this.state.imageUrl, this.imageDraft, M))
					}, this.onStartDateChange = e => {
						this.setState({
							startDate: e
						})
					}, this.onStartTimeChange = e => {
						this.setState({
							startTime: e
						})
					}, this.onEndDateChange = e => {
						this.setState({
							endDate: e
						})
					}, this.onEndTimeChange = e => {
						this.setState({
							endTime: e
						})
					}, this.onTimezoneChange = e => {
						this.setState({
							timezoneName: e
						})
					};
					const t = Ge(),
						[a, n] = Ke(t.startDate),
						[s, r] = Ke(t.endDate);
					this.imageDraft = null, this.state = {
						coinReward: 0,
						costValue: We,
						daysOfDripExtension: 0,
						daysOfPremium: 0,
						description: "",
						giverCoinReward: 0,
						imageError: void 0,
						imageHeight: 0,
						imageUrl: void 0,
						imageWidth: 0,
						isNew: !1,
						isTemporary: !1,
						endDate: s,
						endTime: r,
						nameValue: "",
						selectedAwardSubType: I.d.Global,
						selectedIconFormat: I.c.png,
						subredditCoinReward: 0,
						startDate: a,
						startTime: n,
						pennyDonate: 0,
						pennyPrice: 0,
						timezoneName: t.timezoneName,
						websocket: null
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey), this.cancelExistingWebsockets()
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				sendUploadImageEvent(e, t, a, n) {
					const s = (new Date).getTime();
					this.props.sendEvent(Object(u.f)(e, t, s - a, n))
				}
				cancelExistingWebsockets() {
					const {
						websocket: e
					} = this.state;
					e && (e.close(), this.setState({
						websocket: null
					}))
				}
				getAwardSubTypeDropdownMenuItems() {
					return Object.keys(I.d).map(e => {
						const t = I.d[e];
						return {
							displayText: t,
							value: t
						}
					})
				}
				timeInputsAreValid() {
					const {
						endDate: e,
						endTime: t,
						startDate: a,
						startTime: n,
						isTemporary: s
					} = this.state;
					if (!1 === s) return !0;
					if (!(a && n && e && t)) return !1;
					const r = Object(F.f)(He(a, n));
					return !(Object(F.f)(He(e, t)) < r)
				}
				inputsAreValid() {
					const {
						costValue: e,
						imageUrl: t,
						nameValue: a
					} = this.state;
					return !!(t && e && a && this.timeInputsAreValid())
				}
				render() {
					const {
						className: e,
						onTryCloseModal: t,
						isPending: a,
						subredditId: n
					} = this.props, {
						description: r,
						imageError: o,
						imageUrl: i,
						isTemporary: l,
						nameValue: c
					} = this.state;
					return s.a.createElement("section", {
						className: Object(f.a)(e, b.a.communityAwardCreationModal)
					}, s.a.createElement(x.i, null, s.a.createElement(_.a, null, s.a.createElement(x.q, null, p.fbt._("Create Award", null, {
						hk: "JQtjM"
					})), s.a.createElement(D.a, {
						onClick: t,
						disabled: a
					}, s.a.createElement(x.b, null)))), s.a.createElement("form", null, s.a.createElement(x.l, null, s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Name", null, {
						hk: "3PlUgw"
					})), s.a.createElement(N.b, {
						className: b.a.nameInput,
						maxLength: je,
						name: "awardName",
						onChange: this.handleNameChange,
						placeholder: p.fbt._("Name of Award", null, {
							hk: "2Z5bIH"
						}),
						type: "text",
						value: c
					})), s.a.createElement("div", {
						className: b.a.formSubtext
					}, je - c.length)), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", {
						className: b.a.formLabelText,
						htmlFor: Ae
					}, p.fbt._("Image", null, {
						hk: "2XS0KR"
					})), i ? s.a.createElement(W, {
						imageUrl: i,
						onRemove: this.handleImageRemoval
					}) : s.a.createElement(s.a.Fragment, null, s.a.createElement(te, {
						id: Ae,
						minHeight: Re,
						minWidth: Le,
						maxHeight: ze,
						maxWidth: Be,
						maxSizeBytes: Ue,
						name: "awardImage",
						onImageChange: this.handleChooseImage,
						onImageUploadFailed: e => {
							this.handleImageUploadError(e), this.sendUploadImageEvent(void 0, null, 0, e)
						},
						shouldBeEqualDimensions: !0,
						subredditId: n
					}), o && s.a.createElement("div", {
						className: b.a.errorText
					}, o), s.a.createElement("div", {
						className: b.a.formSubtext
					}, s.a.createElement("span", null, p.fbt._("Width and height should be equal, and at least {minImageSize}px", [p.fbt._param("minImageSize", Le)], {
						hk: "2A77pK"
					})), s.a.createElement("span", null, p.fbt._("File size limited to {maxImageFileSize}MB", [p.fbt._param("maxImageFileSize", Ue / 1048576)], {
						hk: "2iX7Vn"
					}))))), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Description", null, {
						hk: "162GGk"
					})), s.a.createElement(x.t, {
						name: "description",
						onChange: this.handleDescriptionChange,
						placeholder: p.fbt._("Award Description", null, {
							hk: "22gFWn"
						}),
						value: r
					})), s.a.createElement("div", {
						className: b.a.formSubtext
					}, p.fbt._('Use "{coinSymbol}" for the coin symbol', [p.fbt._param("coinSymbol", "%{coin_symbol}")], {
						hk: "40lFWr"
					}))), this.renderCostSelector(), s.a.createElement("div", {
						className: Object(f.a)(b.a.formSection, b.a.modToggleSection)
					}, s.a.createElement("label", null, s.a.createElement(k.a, {
						activeColorOverride: w.a.moderator,
						className: b.a.modToggle,
						on: l,
						onToggle: this.handleIsTemporaryChange
					}), s.a.createElement("span", {
						className: b.a.modToggleLabelText
					}, p.fbt._("Make Award Temporary", null, {
						hk: "4GtfNs"
					})))), this.renderDatePicker(), this.renderGlobalAwardOptions()), s.a.createElement(x.g, null, s.a.createElement(x.a, {
						onClick: t,
						disabled: a
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(x.r, {
						className: b.a.createBtn,
						"data-redditstyle": !0,
						disabled: !this.inputsAreValid() || a,
						onClick: this.handleSubmit
					}, a ? s.a.createElement(O.a, {
						sizePx: Me
					}) : p.fbt._("Create", null, {
						hk: "42PxFO"
					})))))
				}
				renderAwardSubTypeDropdown() {
					const {
						selectedAwardSubType: e
					} = this.state;
					return s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Award Sub Type", null, {
						hk: "31fnRs"
					})), s.a.createElement(S.b, {
						className: b.a.dropdownSelector,
						displayText: e,
						name: "awardSubType",
						options: this.getAwardSubTypeDropdownMenuItems(),
						onSelect: this.handleAwardSubTypeChange
					})))
				}
				renderIconFormatDropdown() {
					const {
						selectedIconFormat: e
					} = this.state;
					return s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Image format", null, {
						hk: "11p9LQ"
					})), s.a.createElement(S.b, {
						className: b.a.dropdownSelector,
						displayText: e,
						name: "iconFormat",
						options: this.getIconFormatDropdownMenuItems(),
						onSelect: this.handleIconFormatChange
					})))
				}
				renderCostSelector() {
					const {
						costValue: e
					} = this.state;
					return s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Coin cost", null, {
						hk: "1cOBVd"
					})), s.a.createElement(Fe.a, {
						className: b.a.coinInput,
						name: "cost of award",
						onChange: this.handleCostChange,
						value: e
					})))
				}
				renderDatePicker() {
					const {
						isTemporary: e
					} = this.state;
					return e ? s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement("fieldset", {
						className: b.a.dateInput
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Start Date and Time", null, {
						hk: "SAI4F"
					})), s.a.createElement(M.a, {
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), s.a.createElement(j.a, {
						className: b.a.timeInput,
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					})), s.a.createElement("fieldset", {
						className: b.a.dateInput
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("End Date and Time", null, {
						hk: "zCwiW"
					})), s.a.createElement(M.a, {
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), s.a.createElement(j.a, {
						className: b.a.timeInput,
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					}))), s.a.createElement("div", {
						className: b.a.timezoneDiv
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Time Zone", null, {
						hk: "3do32Y"
					})), s.a.createElement("fieldset", {
						className: b.a.timezoneInput
					}, s.a.createElement(U.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					})))) : null
				}
				renderGlobalAwardOptions() {
					const {
						coinReward: e,
						daysOfDripExtension: t,
						daysOfPremium: a,
						giverCoinReward: n,
						isNew: r,
						subredditCoinReward: o,
						pennyDonate: i,
						pennyPrice: l
					} = this.state;
					return s.a.createElement(s.a.Fragment, null, this.renderIconFormatDropdown(), this.renderAwardSubTypeDropdown(), s.a.createElement("div", {
						className: Object(f.a)(b.a.formSection, b.a.modToggleSection)
					}, s.a.createElement("label", null, s.a.createElement(k.a, {
						activeColorOverride: w.a.moderator,
						className: b.a.modToggle,
						on: r,
						onToggle: this.handleIsNewChange
					}), s.a.createElement("span", {
						className: b.a.modToggleLabelText
					}, p.fbt._("Show NEW Badge", null, {
						hk: "MIflT"
					})))), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Price in Pennies (this makes Award Cash only purchasable)", null, {
						hk: "4ACqwC"
					})), s.a.createElement(Fe.a, {
						className: b.a.coinInput,
						name: "penny price",
						onChange: this.handlePennyPriceChange,
						value: l
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Pennies Donated", null, {
						hk: "61DzJ"
					})), s.a.createElement(Fe.a, {
						className: b.a.coinInput,
						name: "penny donated",
						onChange: this.handlePennyDonateChange,
						value: i
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Giver Coin Reward", null, {
						hk: "3ZwXG8"
					})), s.a.createElement(Fe.a, {
						className: b.a.coinInput,
						name: "coin reward",
						onChange: this.handleGiverCoinRewardChange,
						value: n
					}))), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Days of Drip Extension", null, {
						hk: "3rnKnC"
					})), s.a.createElement(Fe.a, {
						className: b.a.coinInput,
						name: "days of drip extension",
						onChange: this.handleDaysOfDripExtensionChange,
						value: t
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Days of Premium", null, {
						hk: "2nPLUJ"
					})), s.a.createElement(Fe.a, {
						className: b.a.coinInput,
						name: "days of premium",
						onChange: this.handleDaysOfPremiumChange,
						value: a
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Coin Reward", null, {
						hk: "2QMoAk"
					})), s.a.createElement(Fe.a, {
						className: b.a.coinInput,
						name: "coin reward",
						onChange: this.handleCoinRewardChange,
						value: e
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Subreddit Coin Reward", null, {
						hk: "3QSEXY"
					})), s.a.createElement(Fe.a, {
						className: b.a.coinInput,
						name: "subreddit coin reward",
						onChange: this.handleSubredditCoinRewardChange,
						value: o
					}))))
				}
			}
			var Xe = Object(C.a)(qe);

			function Ye() {
				return (Ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Je = Object(o.c)({
					awards: m.e,
					isPending: m.c,
					isEligibleForGlobalAwards: (e, t) => {
						let {
							subredditId: a
						} = t;
						return Object(l.b)(a)
					},
					isEligibleForTemporaryAwards: (e, t) => {
						let {
							subredditId: a
						} = t;
						return Object(c.a)(a)
					}
				}),
				Ze = Object(r.b)(Je, (e, t) => {
					let {
						subredditId: a
					} = t;
					return {
						onCreateCommunityAward: (t, n, s, r, o, i, l) => e(Object(d.d)(a, t, n, s, r, o, i, l)),
						onCreateModAward: (t, n, s, r, o, i, l) => e(Object(d.f)(a, t, n, s, r, o, i, l)),
						onCreateGlobalAward: t => {
							let {
								awardName: a,
								awardSubType: n,
								coinCost: s,
								coinReward: r,
								daysOfDripExtension: o,
								daysOfPremium: i,
								description: l,
								endDate: c,
								giverCoinReward: m,
								iconFormat: u,
								imageHeight: h,
								imageUrl: p,
								imageWidth: g,
								isNew: b,
								pennyPrice: C,
								pennyDonate: f,
								startDate: E,
								subredditCoinReward: w
							} = t;
							return e(Object(d.e)({
								awardSubType: n,
								coinPrice: s,
								coinReward: r,
								daysOfPremium: i,
								daysOfDripExtension: o,
								description: l,
								endsAt: c,
								giverCoinReward: m,
								iconFormat: u,
								iconUrl: p,
								iconWidth: g,
								iconHeight: h,
								isNew: b,
								pennyPrice: C,
								pennyDonate: f,
								name: a,
								startsAt: E,
								subredditCoinReward: w
							}))
						},
						onCreateAwardFailed: t => e(Object(d.b)(t)),
						onCreateAwardSuccess: t => e(Object(d.c)({
							award: t,
							subredditId: a
						}))
					}
				});
			t.default = Object(i.b)(Ze(Object(h.c)(class extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							isPending: e,
							sendEvent: t,
							toggleModal: a
						} = this.props;
						e || (t(Object(u.d)("click", "cancel")), a())
					}
				}
				render() {
					return this.props.isEligibleForGlobalAwards ? s.a.createElement(Xe, Ye({}, this.props, {
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0,
						onOverlayClick: this.onTryCloseModal
					})) : s.a.createElement(Pe, Ye({}, this.props, {
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0,
						onOverlayClick: this.onTryCloseModal
					}))
				}
			})))
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, a) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/components/FocusableContent/index.m.less"),
				l = a.n(i);
			t.a = o.a.wrapped(e => s.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[l.a.isFocused]: e.isFocused,
					[l.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", l.a)
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_3A53iTDZ6H1L--Ky3qNCTO",
				container: "_3A53iTDZ6H1L--Ky3qNCTO",
				Select: "_2ryUqzbCnNhx8nbFXg9-c0",
				select: "_2ryUqzbCnNhx8nbFXg9-c0",
				Delimiter: "_1X2oFpzvpth9SVe2-xCR9D",
				delimiter: "_1X2oFpzvpth9SVe2-xCR9D"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less": function(e, t, a) {
			e.exports = {
				Input: "_1Css-vhkiry0RZJBBPrnRI",
				input: "_1Css-vhkiry0RZJBBPrnRI"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return x
			}));
			var n = a("./node_modules/lodash/once.js"),
				s = a.n(n),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				i = a("./node_modules/lodash/range.js"),
				l = a.n(i),
				c = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				d = a.n(c),
				m = a("./src/lib/lessComponent.tsx");
			const u = m.a.div("Container", d.a),
				h = m.a.select("Select", d.a),
				p = m.a.span("Delimiter", d.a),
				g = 2018,
				b = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				C = e => {
					const [t, a, n] = e.split("-").map(Number);
					return {
						year: t,
						month: a - 1,
						day: n
					}
				};
			class f extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...C(this.props.value),
								...e
							},
							{
								year: a,
								month: n,
								day: s
							} = t,
							r = new Date(Date.UTC(a, n, s)).toISOString().slice(0, 10);
						this.props.onChange(r)
					}, this.onChangeYear = e => {
						const t = +e.target.value;
						this.onChange({
							year: t
						})
					}, this.onChangeMonth = e => {
						const t = +e.target.value;
						this.onChange({
							month: t
						})
					}, this.onChangeDay = e => {
						const t = +e.target.value;
						this.onChange({
							day: t
						})
					}
				}
				render() {
					const {
						year: e,
						month: t,
						day: a
					} = C(this.props.value);
					return o.a.createElement(u, {
						className: this.props.className
					}, o.a.createElement(h, {
						onChange: this.onChangeMonth,
						value: t
					}, l()(12).map(e => o.a.createElement("option", {
						key: e,
						value: e
					}, b(e)))), o.a.createElement(p, null, "/"), o.a.createElement(h, {
						onChange: this.onChangeDay,
						value: a
					}, l()(1, 32).map(e => o.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), o.a.createElement(p, null, "/"), o.a.createElement(h, {
						onChange: this.onChangeYear,
						value: e
					}, l()(g, g + 10).map(e => o.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var E = f,
				w = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				y = a.n(w);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				T = m.a.input("Input", y.a);

			function x(e) {
				return I() ? o.a.createElement(T, v({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : o.a.createElement(E, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "Q-u1MdpyF-DbsLmmseQmg",
				container: "Q-u1MdpyF-DbsLmmseQmg",
				Input: "_2UYlo-ZbVNGY329O9jwCzC",
				input: "_2UYlo-ZbVNGY329O9jwCzC",
				Delimiter: "_2a_r5Jp8FH3k8flNGKLy5f",
				delimiter: "_2a_r5Jp8FH3k8flNGKLy5f"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less": function(e, t, a) {
			e.exports = {
				TimeInput: "gRgwdQKTQf9yT3db3ACAy",
				timeInput: "gRgwdQKTQf9yT3db3ACAy"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return x
			}));
			var n = a("./node_modules/lodash/once.js"),
				s = a.n(n),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				i = a("./node_modules/lodash/clamp.js"),
				l = a.n(i),
				c = a("./src/reddit/components/FocusableContent/index.tsx"),
				d = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				m = a.n(d),
				u = a("./src/lib/lessComponent.tsx");
			const h = u.a.wrapped(c.a, "Container", m.a),
				p = u.a.input("Input", m.a),
				g = u.a.span("Delimiter", m.a),
				b = e => ("0" + e).slice(-2),
				C = (e, t) => {
					const a = +e.slice(-2);
					if (Number.isInteger(a)) return a > t ? 0 : a
				};
			class f extends o.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = l()(+this.state.hour, 0, 24);
						const t = l()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const a = `${b(e)}:${b(t)}`;
						this.props.onChange(a)
					}, this.onChangeHour = e => {
						const t = C(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = C(e.target.value, 59);
						void 0 !== t && this.setState({
							minute: t
						}, this.callOnChange)
					}, this.onHourInputBlur = () => this.setState({
						isHourInputFocused: !1
					}), this.onHourInputFocus = () => this.setState({
						isHourInputFocused: !0
					}), this.onMinuteInputBlur = () => this.setState({
						isMinuteInputFocused: !1
					}), this.onMinuteInputFocus = () => this.setState({
						isMinuteInputFocused: !0
					});
					const [t, a] = e.value.split(":").map(Number);
					this.state = {
						hour: t,
						minute: a,
						isHourInputFocused: !1,
						isMinuteInputFocused: !1
					}
				}
				componentWillReceiveProps(e) {
					const [t, a] = e.value.split(":").map(Number);
					this.setState({
						hour: t,
						minute: a
					})
				}
				render() {
					const e = this.state.isHourInputFocused || this.state.isMinuteInputFocused;
					return o.a.createElement(h, {
						className: this.props.className,
						isFocused: e
					}, o.a.createElement(p, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: b(this.state.hour)
					}), o.a.createElement(g, null, ":"), o.a.createElement(p, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: b(this.state.minute)
					}))
				}
			}
			var E = f,
				w = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				y = a.n(w);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				T = u.a.input("TimeInput", y.a);

			function x(e) {
				return I() ? o.a.createElement(T, v({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : o.a.createElement(E, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less": function(e, t, a) {
			e.exports = {
				select: "_1gQeiuYndtyKo6Or5iS8xL"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/loadWithRetries/index.ts"),
				i = a("./src/reddit/helpers/scheduledPosts/index.ts"),
				l = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				c = a.n(l);
			const d = e => {
				const t = e.map(i.d);
				return t.sort((e, t) => {
					const a = -1440,
						{
							offset: n = a
						} = e,
						{
							offset: s = a
						} = t;
					return s - n || (e.displayText < t.displayText ? -1 : 1) || 0
				}), t
			};
			class m extends s.a.PureComponent {
				constructor(e) {
					super(e), this.onSelect = e => {
						const t = e.target.value;
						this.props.onChange(t)
					};
					const t = m.cachedTimezoneOptions || d([this.props.selectedTimezoneName]);
					this.state = {
						timezoneOptions: t
					}
				}
				async loadTimezones() {
					const e = (await Object(o.a)(() => a.e("TimezoneList").then(a.bind(null, "./src/lib/timezone/timezoneList.ts")))).default,
						t = d(e);
					this.setState({
						timezoneOptions: t
					}), m.cachedTimezoneOptions = t
				}
				componentDidMount() {
					m.cachedTimezoneOptions || this.loadTimezones()
				}
				render() {
					return s.a.createElement("select", {
						onChange: this.onSelect,
						value: this.props.selectedTimezoneName,
						className: Object(r.a)(c.a.select, this.props.className)
					}, this.state.timezoneOptions.map(e => {
						let {
							name: t,
							displayText: a
						} = e;
						return s.a.createElement("option", {
							key: t,
							value: t
						}, a)
					}))
				}
			}
			t.a = m
		},
		"./src/reddit/controls/NumberInput/index.m.less": function(e, t, a) {
			e.exports = {
				inputId: "_2u55GXL0tixR3CDSXDptAh",
				numberInput: "w-WaN4v2qJbrNH2KHKl22",
				buttonContainer: "_1jxskdr4hjRXJPk9GUqGX5",
				chevronBtn: "_2V0mlaYUMWvXR35HSCUhVt",
				icon: "_2YiYPzVRljNQIohYKWAbZm"
			}
		},
		"./src/reddit/controls/NumberInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return u
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/FormFields/index.tsx"),
				i = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = a("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				c = a("./src/reddit/controls/NumberInput/index.m.less"),
				d = a.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.inputRef = null, this.handleIncrement = e => {
						if (e.preventDefault(), !this.inputRef) return;
						this.inputRef.stepUp();
						const {
							onChange: t,
							onIncrease: a,
							value: n
						} = this.props;
						this.inputRef.value !== n && (t(parseFloat(this.inputRef.value)), a && a())
					}, this.handleDecrement = e => {
						if (e.preventDefault(), !this.inputRef) return;
						this.inputRef.stepDown();
						const {
							onChange: t,
							onDecrease: a,
							value: n
						} = this.props;
						this.inputRef.value !== n && (t(parseFloat(this.inputRef.value)), a && a())
					}, this.handleChangeEvent = e => {
						const t = e.target.value;
						this.props.onChange(parseFloat(t))
					}, this.focusOnInput = e => {
						e.preventDefault(), this.inputRef && this.inputRef.focus()
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					const {
						className: e,
						id: t,
						...a
					} = this.props, n = t || d.a.inputId;
					return s.a.createElement(o.b, m({}, a, {
						className: Object(r.a)(e, d.a.numberInput),
						id: n,
						inputRef: this.setInputRef,
						onChange: this.handleChangeEvent,
						type: "number"
					}), s.a.createElement("div", {
						className: d.a.buttonContainer
					}, s.a.createElement("button", {
						"aria-controls": n,
						className: d.a.chevronBtn,
						onClick: this.handleIncrement,
						onMouseDown: this.focusOnInput,
						tabIndex: -1
					}, s.a.createElement(l.a, {
						className: d.a.icon
					})), s.a.createElement("button", {
						"aria-controls": n,
						className: d.a.chevronBtn,
						onClick: this.handleDecrement,
						onMouseDown: this.focusOnInput,
						tabIndex: -1
					}, s.a.createElement(i.a, {
						className: d.a.icon
					}))))
				}
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return r
			})), a.d(t, "d", (function() {
				return o
			})), a.d(t, "a", (function() {
				return i
			})), a.d(t, "b", (function() {
				return l
			}));
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				s = a("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const a = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return a.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const a = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return a.multipliedBy(s).toFixed(0)
			}

			function l(e) {
				const t = new n.BigNumber(e),
					a = new n.BigNumber("1e18");
				return t.dividedBy(a).toString()
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AwardCreationModal.4cd56ec33922cc5f629c.js.map